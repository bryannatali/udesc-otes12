import { Form } from "@unform/web"
import styled from "styled-components"

export const DREContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  margin-top: 3rem;

  padding: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.secundary};

  > button {
    margin-top: 2rem;
  }
`