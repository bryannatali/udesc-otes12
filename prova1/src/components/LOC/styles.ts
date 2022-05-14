import { Form } from "@unform/web"
import styled from "styled-components"
import { InputContainer } from "../UnformInput/styles"

export const LOCContainer = styled(Form)`
  display: flex;
  align-items: center;
  
  width: 100%;

  background: ${({ theme }) => theme.colors.background.primary};
  padding: 1rem;
  border-radius: 0.5rem;

  ${InputContainer} {
    width: 100%;
    min-width: 400px;
  }

  > button {
    margin-left: 2rem;
  }
`