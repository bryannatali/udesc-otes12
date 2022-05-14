import { SubmitHandler } from "@unform/core"
import { useState } from "react"
import { Button } from "../Button"
import { ResultBox } from "../ResultBox"
import { UnformInput } from "../UnformInput"

import { AcceptanceTestContainer } from "./styles"

type FormData = {
  totalAcceptanceTests?: number
  totalPreviousAcceptanceTests?: number
}

export function calculateAcceptance(data: FormData) {
  const { totalPreviousAcceptanceTests, totalAcceptanceTests } = data

  if (
    totalAcceptanceTests === undefined
    || totalPreviousAcceptanceTests === undefined
  ) {
    return null
  }

  return totalAcceptanceTests - totalPreviousAcceptanceTests
}

export const AcceptanceTest: React.FC = () => {
  const [acceptanceTests, setAcceptanceTests] = useState<number | null>(null)

  const handleCaculate: SubmitHandler<FormData> = (data) => {
    const acceptance = calculateAcceptance(data)

    setAcceptanceTests(acceptance)
  }

  return (
    <AcceptanceTestContainer onSubmit={handleCaculate}>
      <h1 style={{ marginBottom: '2rem' }}>Testes de Aceitação</h1>

      <UnformInput
        type="number"
        name="totalAcceptanceTests"
        label="Total de Casos de Teste de Aceitação"
        containerStyle={{ marginBottom: '1.5rem' }}
      />

      <UnformInput
        type="number"
        name="totalPreviousAcceptanceTests"
        label="Total de Casos de Teste de Aceitação Anteriormente"
      />

      <Button type="submit">Calcular</Button>

      {acceptanceTests !== null && (
        <ResultBox
          result={acceptanceTests}
          resultText="Número de Casos de Teste de Aceitação"
        />
      )}
    </AcceptanceTestContainer>
  )
}