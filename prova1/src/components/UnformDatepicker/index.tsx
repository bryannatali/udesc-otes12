import { useField } from "@unform/core"
import { FunctionComponent, useEffect, useRef, useState } from "react"
import { registerLocale, ReactDatePickerProps } from "react-datepicker"
import ptBR from "date-fns/locale/pt-BR"

import "react-datepicker/dist/react-datepicker.css"

import { DatePickerContainer, Label, Error } from "./styles"

registerLocale("ptBR", ptBR)

type UnformDatePickerProps = Omit<
  Omit<
    Omit<
      Omit<ReactDatePickerProps, "selected">,
      "locale"
    >,
    "onChange"
  >,
  "dateFormat"
> & {
  name: string
  label?: string
}

export const UnformDatePicker: FunctionComponent<UnformDatePickerProps> = ({ name, label, ...rest }) => {
  const { fieldName, registerField, defaultValue, error } = useField(name)

  const datepickerRef = useRef(null)

  const dateDefaultValue = !!defaultValue ? new Date(defaultValue) : undefined

  const [date, setDate] = useState<Date | undefined>(dateDefaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: "props.selected",
      clearValue: (ref) => {
        ref.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}

      <DatePickerContainer
        dateFormat="dd/MM/yyyy"
        locale="ptBR"
        ref={datepickerRef}
        selected={date}
        onChange={newDate => setDate(newDate === null ? undefined : newDate as Date)}
        {...rest}
      />

      {error && <Error>{error}</Error>}
    </>
  )
}