import styled from 'styled-components'
import { Form } from "@unform/web"

export const ProjectMeasureContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  margin-top: 3rem;

  padding: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.secundary};

  .started-at,
  .should-end-at {
    margin-bottom: 1rem;
  }

  > button {
    margin-top: 2rem;
  }
`