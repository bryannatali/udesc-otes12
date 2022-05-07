import styled from 'styled-components'
import { Form } from "@unform/web"
import { InputGroupContainer } from '../InputGroup/styles'

export const ProgramVolumeContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  margin-top: 3rem;

  padding: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.secundary};

  > button {
    margin-top: 2rem;
  }

  ${InputGroupContainer} + ${InputGroupContainer} {
    margin-top: 1.5rem;
  }
`