import React, { CSSProperties, InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Error, InputContainer, Label, StyledInput } from './styles'

interface Props {
  name: string
  label?: string
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props & {
  containerStyle?: CSSProperties
}

export function UnformInput({ name, label, type, containerStyle, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        if (type === 'number') {
          return Number(ref.current.value)
        }

        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField, type])

  return (
    <InputContainer style={containerStyle}>
      {label && <Label htmlFor={fieldName}>{label}</Label>}

      <StyledInput
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        onFocus={clearError}
        className={error ? 'error' : undefined}
        type={type}
        {...rest}
      />

      {error && <Error>{error}</Error>}
    </InputContainer>
  )
}