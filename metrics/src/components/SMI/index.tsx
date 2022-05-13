import { SubmitHandler } from "@unform/core"
import { useState } from "react"

import { Button } from "../Button"
import { InputGroup } from "../InputGroup"
import { ResultBox } from "../ResultBox"
import { UnformInput } from "../UnformInput"

import { SMIContainer } from "./styles"

type FormData = {
  Mt: number
  Fc: number
  Fa: number
  Fd: number
}

export const SMI: React.FC = () => {
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate: SubmitHandler<FormData> = (data) => {
    const { Mt, Fc, Fa, Fd } = data

    const _result = (Mt - (Fa + Fc + Fd)) / Mt

    setResult(_result)
  }

  return (
    <SMIContainer onSubmit={handleCalculate}>
      <h1 style={{ marginBottom: '2rem' }}>Índice de Maturidade de Software - SMI</h1>

      <UnformInput
        type="number"
        name="Mt"
        label="Nº de Módulos da Versão Atual"
        placeholder="Ex: 12"
        containerStyle={{ marginBottom: '1.5rem' }}
      />

      <InputGroup>
        <UnformInput
          type="number"
          name="Fc"
          label="Nº de Módulos Alterados"
          placeholder="Ex: 3"
        />

        <UnformInput
          type="number"
          name="Fa"
          label="Nº de Módulos Acrescentados"
          placeholder="Ex: 2"
        />
      </InputGroup>

      <UnformInput
        type="number"
        name="Fd"
        label="Nº de Módulos da Versão Anterior excluídos na Versão Atual"
        placeholder="Ex: 4"
        containerStyle={{ marginTop: '1.5rem' }}
      />

      {result && (
        <ResultBox result={result} resultText="Resultado SMI" />
      )}

      <Button type="submit">Calcular</Button>
    </SMIContainer>
  )
}