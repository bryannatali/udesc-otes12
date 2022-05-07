import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray.medium};
  border-radius: 4px;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};

  &:focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.primary};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secundary};
  }

  &.error {
    border-width: 2px;
    border-color:${({ theme }) => theme.colors.danger};

    &::placeholder {
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.25rem;

  margin-bottom: 0.25rem;
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  margin-top: 0.25rem;
`