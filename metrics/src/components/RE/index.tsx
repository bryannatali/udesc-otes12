import { SubmitHandler } from "@unform/core"
import { useState } from "react"

import { Button } from "../Button"
import { ResultBox } from "../ResultBox"
import { UnformInput } from "../UnformInput"

import { REContainer } from "./styles"

type FormData = {
  P: string
  C: number
}

export const RE: React.FC = () => {
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate: SubmitHandler<FormData> = (data) => {
    const { P, C } = data

    const _result = Number(P) * C

    setResult(_result)
  }

  return (
    <REContainer onSubmit={handleCalculate}>
      <h1 style={{ marginBottom: '2rem' }}>RE - Exposição ao Risco</h1>

      <UnformInput
        style={{ marginBottom: '2rem' }}
        name="P"
        type="text"
        label="Probabilidade de ocorrência de um risco"
        placeholder="Ex: 0.3"
      />

      <UnformInput
        name="C"
        type="number"
        label="Custo para o projeto, caso o risco ocorra"
        placeholder="Ex: 3"
      />

      {result && (
        <ResultBox result={result} resultText="RE" />
      )}

      <Button type="submit">Calcular</Button>
    </REContainer>
  )
}