import { SubmitHandler } from "@unform/core"
import { useState } from "react"

import { Button } from "../Button"
import { LOC } from "../LOC"
import { ResultBox } from "../ResultBox"
import { UnformInput } from "../UnformInput"

import { TestCasesAndAssertionsContainer, TestCasesAndAssertionsForm } from "./styles"

type FormData = {
  loc?: number
  ct?: number
  a?: number
}

export function calculateTestCasesAndAssertions(data: FormData) {
  const { loc, ct, a } = data

  if (loc === undefined || ct === undefined || a === undefined) {
    return null
  }

  const testCases = ct / loc
  const assertions = a / loc

  return { testCases, assertions }
}

export const TestCasesAndAssertions: React.FC = () => {
  const [linesOfCode, setLinesOfCode] = useState<number | null>(null)
  const [testCases, setTestCases] = useState<number | null>(null)
  const [assertions, setAssertions] = useState<number | null>(null)

  const handleCalculate: SubmitHandler<FormData> = (data) => {
    const result = calculateTestCasesAndAssertions(data)

    if (!result) {
      return
    }

    setTestCases(result.testCases)
    setAssertions(result.assertions)
  }

  return (
    <TestCasesAndAssertionsContainer>
      <h1 style={{ marginBottom: '2rem' }}>Quantidade de Casos de Teste e Assertivas</h1>

      <LOC onLinesOfCodeLoaded={setLinesOfCode} />

      {linesOfCode && (
        <TestCasesAndAssertionsForm
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
            name="ct"
            label="Nº de Casos de Teste"
            containerStyle={{ marginTop: '1.5rem' }}
          />

          <UnformInput
            type="number"
            name="a"
            label="Nº de Assertivas"
            containerStyle={{ marginTop: '1.5rem' }}
          />

          <Button type="submit">Calcular</Button>
        </TestCasesAndAssertionsForm>
      )}

      {testCases !== null && (
        <ResultBox result={testCases} resultText="Casos de Teste" />
      )}

      {assertions !== null && (
        <ResultBox result={assertions} resultText="Assertivas" />
      )}
    </TestCasesAndAssertionsContainer>
  )
}