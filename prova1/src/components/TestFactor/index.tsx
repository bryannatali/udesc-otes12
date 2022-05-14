import { SubmitHandler } from "@unform/core"
import { useState } from "react"

import { Button } from "../Button"
import { LOC } from "../LOC"
import { ResultBox } from "../ResultBox"
import { UnformInput } from "../UnformInput"

import { TestFactorContainer, TestFactorForm } from "./styles"

type FormData = {
  loc?: number
  lot?: number
}

export function calculateTestFactor(data: FormData) {
  const { loc, lot } = data

  if (loc === undefined || lot === undefined) {
    return null
  }

  const testFactor = lot / loc

  return testFactor
}

export const TestFactor: React.FC = () => {
  const [linesOfCode, setLinesOfCode] = useState<number | null>(null)
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate: SubmitHandler<FormData> = (data) => {
    const testFactor = calculateTestFactor(data)

    setResult(testFactor)
  }

  return (
    <TestFactorContainer>
      <h1 style={{ marginBottom: '2rem' }}>Fator de Teste</h1>

      <LOC onLinesOfCodeLoaded={setLinesOfCode} />

      {linesOfCode && (
        <TestFactorForm
          initialData={{ loc: linesOfCode }}
          onSubmit={handleCalculate}
        >
          <UnformInput
            type="number"
            name="loc"
            label="Lines of Code"
            containerStyle={{ marginTop: '1.5rem' }}
          />

          <UnformInput
            type="number"
            name="lot"
            label="Lines of Test"
            containerStyle={{ marginTop: '1.5rem' }}
          />

          <Button type="submit">Calcular</Button>
        </TestFactorForm>
      )}

      {result !== null && (
        <ResultBox result={result} resultText="Fator de Teste" />
      )}
    </TestFactorContainer>
  )
}