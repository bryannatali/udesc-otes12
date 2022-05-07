import { ButtonHTMLAttributes } from "react";

import { StyledButton } from "./styles";

type ButtonProps = {
  color?: "primary" | "secundary" | "danger" | "success" | "gray.light" | "gray.medium" | "gray.dark"
  outline?: boolean
}

type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ color, outline, children, ...rest }: Props) {
  return (
    <StyledButton
      color={color || "primary"}
      outline={!!outline}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}