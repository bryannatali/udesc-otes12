import { SubmitHandler } from "@unform/core"
import { useState } from "react"

import { Button } from "../Button"
import { InputGroup } from "../InputGroup"
import { ResultBox } from "../ResultBox"
import { UnformInput } from "../UnformInput"

import { IntegrityContainer } from "./styles"

type FormData = {
  threat: string
  safety: string
}

export const Integrity: React.FC = () => {
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate: SubmitHandler<FormData> = (data) => {
    const threat = Number(data.threat)
    const safety = Number(data.safety)

    const _result = 1 - (threat * (1 - safety))

    setResult(_result)
  }

  return (
    <IntegrityContainer onSubmit={handleCalculate}>
      <h1 style={{ marginBottom: '2rem' }}>Integridade</h1>

      <InputGroup>
        <UnformInput
          name="threat"
          type="text"
          label="Ameaça"
          placeholder="Ex: 0.2"
        />

        <UnformInput
          name="safety"
          type="text"
          label="Segurança"
          placeholder="Ex: 0.87"
        />
      </InputGroup>

      {result && (
        <ResultBox result={result} resultText="Integridade" />
      )}

      <Button type="submit">Calcular</Button>
    </IntegrityContainer>
  )
}