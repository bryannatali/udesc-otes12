import { Option } from "../components/Select"

import { MetricsEnum } from "../types/MetricsEnum"

export const metricsOptions: Option[] = [
  { value: MetricsEnum.ProjectMeasure, label: 'Medidas de Projeto' },
  { value: MetricsEnum.TestFactor, label: 'Fator de Teste' },
  { value: MetricsEnum.TestCasesAndAssertions, label: 'Quantidade de casos de Teste e Assertivas' },
  { value: MetricsEnum.AssertionsPassingAndFailing, label: 'Percentual de Assertivas Passando e Falhando' },
  { value: MetricsEnum.AcceptanceTest, label: 'Testes de Aceitação' },
]