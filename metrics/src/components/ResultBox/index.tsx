import { ResultBoxContainer } from "./styles"

type ResultBoxProps = {
  resultText?: string
  result: number
}

export const ResultBox: React.FC<ResultBoxProps> = ({ resultText = "Resultado", result }) => {
  return (
    <ResultBoxContainer>
      <h2>{resultText}: {result.toFixed(2)}</h2>
    </ResultBoxContainer>
  )
}