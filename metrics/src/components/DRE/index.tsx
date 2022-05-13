import { SubmitHandler } from "@unform/core"
import { useState } from "react"

import { Button } from "../Button"
import { ResultBox } from "../ResultBox"
import { UnformInput } from "../UnformInput"

import { DREContainer } from "./styles"

type FormData = {
  E: number
  D: number
}

export const DRE: React.FC = () => {
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate: SubmitHandler<FormData> = (data) => {
    const { E, D } = data

    const _result = E / (E + D)

    setResult(_result)
  }

  return (
    <DREContainer onSubmit={handleCalculate}>
      <h1 style={{ marginBottom: '2rem' }}>DRE - Eficiência na Remoção de Defeitos</h1>

      <UnformInput
        style={{ marginBottom: '2rem' }}
        name="E"
        type="number"
        label="Nº de erros encontrados antes do software ser fornecido ao usuário"
        placeholder="Ex: 1"
      />

      <UnformInput
        name="D"
        type="number"
        label="Nº de defeitos depois que o software é entrege"
        placeholder="Ex: 3"
      />

      {result && (
        <ResultBox result={result} resultText="DRE" />
      )}

      <Button type="submit">Calcular</Button>
    </DREContainer>
  )
}