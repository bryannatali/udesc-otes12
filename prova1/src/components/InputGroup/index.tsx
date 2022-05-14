import { InputGroupBox, InputGroupContainer, InputGroupTitle } from "./styles"

type InputGroupProps = {
  title?: string
  children: React.ReactNode
}

export const InputGroup: React.FC<InputGroupProps> = ({ title, children }) => {
  return (
    <InputGroupContainer>
      {title && <InputGroupTitle>{title}</InputGroupTitle>}

      <InputGroupBox>
        {children}
      </InputGroupBox>
    </InputGroupContainer>
  )
}