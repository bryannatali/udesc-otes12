import { Option } from "../components/Select"

import { MetricsEnum } from "../types/MetricsEnum"

export const metricsOptions: Option[] = [
  { value: MetricsEnum.ProgramVolume, label: 'Volume do Programa' },
  { value: MetricsEnum.SMI, label: 'Índice de Maturidade de Software - SMI' },
  { value: MetricsEnum.Integrity, label: 'Integridade' },
  { value: MetricsEnum.DRE, label: 'Eficiência na Remoção de Defeitos' },
  { value: MetricsEnum.RE, label: 'Exposição ao Risco' },
]