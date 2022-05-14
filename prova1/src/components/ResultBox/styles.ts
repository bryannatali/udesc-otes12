import styled from 'styled-components'

export const ResultBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.primary};

  margin-top: 1.5rem;
`
