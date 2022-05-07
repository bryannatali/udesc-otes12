import styled from 'styled-components'
import { InputContainer } from '../UnformInput/styles'

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.background.primary};
  padding: 1rem;
`

export const InputGroupTitle = styled.h2`
  margin-bottom: 1rem;
`

export const InputGroupBox = styled.div`
  display: flex;
  align-items: center;

  > ${InputContainer} + ${InputContainer} {
    margin-left: 1rem;
  }

  & + div {
    margin-top: 1rem;
  }
`