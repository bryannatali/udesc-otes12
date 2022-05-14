import { SubmitHandler } from "@unform/core"
import { useState } from "react"

import { api } from "../../services/api"

import { Button } from "../Button"
import { UnformInput } from "../UnformInput"

import { LOCContainer } from "./styles"

type LOCProps = {
  onLinesOfCodeLoaded: (linesOfCode: number) => void
}

export const LOC: React.FC<LOCProps> = ({ onLinesOfCodeLoaded }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit: SubmitHandler<{ repository?: string }> = async ({ repository }) => {
    setIsLoading(true)

    if (!repository) {
      setIsLoading(false)
      return
    }

    try {
      const githubUsernameAndRepo = repository.split('.com/')[1]

      const { data: linesOfCodeItems } = await api.get<{ linesOfCode: number }[]>('/loc', {
        params: {
          github: githubUsernameAndRepo
        }
      })

      const total = linesOfCodeItems.map(({ linesOfCode }) => linesOfCode).reduce((a, b) => a + b, 0)

      onLinesOfCodeLoaded(total)
    } catch (err) {
      alert("Erro ao carregar informações")
    }

    setIsLoading(false)
  }

  return (
    <LOCContainer onSubmit={handleSubmit}>
      <UnformInput name="repository" placeholder="Informe o repositório do projeto" />

      <Button type="submit" disabled={isLoading}>
        Buscar {isLoading && '...'}
      </Button>
    </LOCContainer>
  )
}