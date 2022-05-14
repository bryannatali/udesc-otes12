import { SubmitHandler } from '@unform/core'
import { useState } from 'react'

import { Button } from "../Button"
import { ResultBox } from '../ResultBox'
import { UnformDatePicker } from '../UnformDatepicker'

import { ProjectMeasureContainer } from "./styles"

type FormData = {
  startedAt: Date
  shouldEndAt: Date
  endedAt: Date
}

export function calculateMeasure(data: FormData) {
  const { startedAt, shouldEndAt, endedAt } = data

  const measure = ((endedAt.getTime() - shouldEndAt.getTime()) * 100) / (shouldEndAt.getTime() - startedAt.getTime())

  return measure
}

export const ProjectMeasure: React.FC = () => {
  const [projectMeasure, setProjectMeasure] = useState<number | null>(null)

  const handleCalculate: SubmitHandler<FormData> = (data) => {
    const measure = calculateMeasure(data)

    setProjectMeasure(measure)
  }

  return (
    <ProjectMeasureContainer onSubmit={handleCalculate}>
      <h1 style={{ marginBottom: '2rem' }}>Medidas de Projeto</h1>

      <UnformDatePicker
        name="startedAt"
        label="Data de Início"
        className="started-at"
      />

      <UnformDatePicker
        name="shouldEndAt"
        label="Data Planejada de Término"
        className="should-end-at"
      />

      <UnformDatePicker
        name="endedAt"
        label="Data Real de Término"
        className="ended-at"
      />

      {projectMeasure && (
        <ResultBox resultText="Medida do Projeto" result={projectMeasure} />
      )}

      <Button type="submit">
        Calcular
      </Button>
    </ProjectMeasureContainer>
  )
}