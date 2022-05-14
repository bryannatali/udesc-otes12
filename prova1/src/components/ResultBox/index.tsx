import { ResultBoxContainer } from "./styles"

type ResultBoxProps = {
  resultText?: string
  result: number
  resultCompleteText?: string
}

export const ResultBox: React.FC<ResultBoxProps> = ({ resultText = "Resultado", result, resultCompleteText }) => {
  return (
    <ResultBoxContainer>
      <h2>{resultText}: {result.toFixed(2)}{resultCompleteText}</h2>
    </ResultBoxContainer>
  )
}