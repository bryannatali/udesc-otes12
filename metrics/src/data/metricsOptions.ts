import { Option } from "../components/Select"

import { MetricsEnum } from "../types/MetricsEnum"

export const metricsOptions: Option[] = [
  { value: MetricsEnum.ProgramVolume, label: 'Volume do Programa' },
  { value: MetricsEnum.SMI, label: 'Índice de Maturidade de Software - SMI' },
]