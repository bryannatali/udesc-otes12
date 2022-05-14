import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { metricsOptions } from './data/metricsOptions'
import { MetricsEnum } from './types/MetricsEnum'

import { Select } from './components/Select'
import { ProjectMeasure } from './components/ProjectMeasure'
import { TestFactor } from './components/TestFactor'

import { AppContainer, SelectMetricsContainer } from './styles/App.styles'
import { GlobalStyle } from './styles/global'
import darkTheme from './styles/themes/dark'
import { TestCasesAndAssertions } from './components/TestCasesAndAssertions'
import { AssertionsPassingAndFailing } from './components/AssertionsPassingAndFailing'
import { AcceptanceTest } from './components/AcceptanceTest'

function App() {
  const [selectedMetric, setSelectedMetric] = useState<MetricsEnum | null>(null)

  const MemoizedMetricCalcComponent = useMemo(() => {
    switch (selectedMetric) {
      case MetricsEnum.ProjectMeasure:
        return <ProjectMeasure />
      case MetricsEnum.TestFactor:
        return <TestFactor />
      case MetricsEnum.TestCasesAndAssertions:
        return <TestCasesAndAssertions />
      case MetricsEnum.AssertionsPassingAndFailing:
        return <AssertionsPassingAndFailing />
      case MetricsEnum.AcceptanceTest:
        return <AcceptanceTest />
      default:
        return null
    }
  }, [selectedMetric])

  return (
    <ThemeProvider theme={darkTheme}>
      <AppContainer>
        <SelectMetricsContainer>
          <h1>Métricas</h1>
          <h3 style={{ marginBottom: '2rem' }}>Calcule as métricas do seu projeto de software</h3>

          <Select
            placeholder="Selecione a Métrica"
            options={metricsOptions}
            onChange={option => setSelectedMetric(option?.value || null)}
          />
        </SelectMetricsContainer>

        {MemoizedMetricCalcComponent}
      </AppContainer>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
