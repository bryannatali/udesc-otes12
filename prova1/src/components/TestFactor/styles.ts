import { Form } from "@unform/web"
import styled from "styled-components"

export const TestFactorContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 3rem;

  padding: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.secundary};
`

export const TestFactorForm = styled(Form)`
  display: flex;
  flex-direction: column;
  
  > button {
    margin-top: 2rem;
  }
`