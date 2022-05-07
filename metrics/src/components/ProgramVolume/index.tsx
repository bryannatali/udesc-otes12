import { SubmitHandler } from '@unform/core'
import { useState } from 'react'

import { Button } from "../Button"
import { InputGroup } from "../InputGroup"
import { ResultBox } from '../ResultBox'
import { UnformInput } from "../UnformInput"

import { ProgramVolumeContainer } from "./styles"

type FormData = {
  n1: number
  N1: number
  n2: number
  N2: number
}

export const ProgramVolume: React.FC = () => {
  const [volume, setVolume] = useState<number | null>(null)
  const [minimalVolume, setMinimalVolume] = useState<number | null>(null)

  const handleCalculate: SubmitHandler<FormData> = (data) => {
    const { n1, n2, N2 } = data

    const N = (n1 * Math.log2(n1)) + (n2 * Math.log2(n2))
    const _volume = N * Math.log2(n1 + n2)

    const _minimalVolume = (2 / n1) * (n2 / N2)

    setVolume(_volume)
    setMinimalVolume(_minimalVolume)
  }

  return (
    <ProgramVolumeContainer onSubmit={handleCalculate}>
      <h1 style={{ marginBottom: '2rem' }}>Volume de Programa</h1>

      <InputGroup title="Operadores">
        <UnformInput
          name="n1"
          type="number"
          placeholder="Ex: 2"
          label="Nº de operadores distintos"
        />
        <UnformInput
          name="N1"
          type="number"
          placeholder="Ex: 2"
          label="Nº de ocorrências de operador"
        />
      </InputGroup>

      <InputGroup title="Operandos">
        <UnformInput
          name="n2"
          type="number"
          placeholder="Ex: 2"
          label="Nº de operandos distintos"
        />
        <UnformInput
          name="N2"
          type="number"
          placeholder="Ex: 2"
          label="Nº ocorrências de operando"
        />
      </InputGroup>

      {volume && (
        <ResultBox resultText="Volume" result={volume} />
      )}

      {minimalVolume && (
        <ResultBox resultText="Volume Mínimo" result={minimalVolume} />
      )}

      <Button type="submit">
        Calcular
      </Button>
    </ProgramVolumeContainer>
  )
}