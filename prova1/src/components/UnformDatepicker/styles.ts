import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import { lighten } from "polished";

export const DatePickerContainer = styled(ReactDatePicker)`
  border: 1px solid ${({ theme }) => lighten(0.4, theme.colors.text.primary)};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.secundary};
  height: 38px;
  width: 100%;
  padding: 0 8px;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.primary};
  
  margin-bottom: 0.25rem;
`

export const Error = styled.span`
  margin-top: 0.25rem;
  
  color: ${({ theme }) => theme.colors.danger};
`