import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SelectMetricsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.secundary};
`