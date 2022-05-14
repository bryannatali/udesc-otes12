import { SubmitHandler } from "@unform/core"
import { useState } from "react"
import { Button } from "../Button"
import { ResultBox } from "../ResultBox"
import { UnformInput } from "../UnformInput"

import { AssertionsPassingAndFailingContainer } from "./styles"

type FormData = {
  totalAssertions?: number
  passingAssertions?: number
  failingAssertions?: number
}

export function calculatePercentages(data: FormData) {
  const { totalAssertions, passingAssertions, failingAssertions } = data

  if (
    totalAssertions === undefined
    || passingAssertions === undefined
    || failingAssertions === undefined
  ) {
    return null
  }

  const passingPercentage = passingAssertions / totalAssertions * 100
  const failingPercentage = failingAssertions / totalAssertions * 100

  return { passingPercentage, failingPercentage }
}

export const AssertionsPassingAndFailing: React.FC = () => {
  const [passingPercentage, setPassingPercentage] = useState<number | null>(null)
  const [failingPercentage, setFailingPercentage] = useState<number | null>(null)

  const handleCaculate: SubmitHandler<FormData> = (data) => {
    const result = calculatePercentages(data)

    if (!result) {
      return
    }

    setPassingPercentage(result.passingPercentage)
    setFailingPercentage(result.failingPercentage)
  }

  return (
    <AssertionsPassingAndFailingContainer onSubmit={handleCaculate}>
      <h1>Percentual de Assertivas Passando e Falhando</h1>
      <h2 style={{ marginBottom: '2rem' }}>(Teste de Unidade e Aceitação)</h2>

      <UnformInput
        type="number"
        name="totalAssertions"
        label="Total de Assertivas"
        containerStyle={{ marginBottom: '1.5rem' }}
      />

      <UnformInput
        type="number"
        name="passingAssertions"
        label="Assertivas Passando"
        containerStyle={{ marginBottom: '1.5rem' }}
      />

      <UnformInput
        type="number"
        name="failingAssertions"
        label="Assertivas Falhando"
      />

      <Button type="submit">Calcular</Button>

      {passingPercentage !== null && (
        <ResultBox
          result={passingPercentage}
          resultCompleteText="%"
          resultText="Assertivas Passando"
        />
      )}

      {failingPercentage !== null && (
        <ResultBox
          result={failingPercentage}
          resultCompleteText="%"
          resultText="Assertivas Falhando"
        />
      )}
    </AssertionsPassingAndFailingContainer>
  )
}