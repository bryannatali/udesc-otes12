import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { metricsOptions } from './data/metricsOptions'
import { MetricsEnum } from './types/MetricsEnum'

import { Select } from './components/Select'
import { ProgramVolume } from './components/ProgramVolume'
import { SMI } from './components/SMI'

import { AppContainer, SelectMetricsContainer } from './styles/App.styles'
import { GlobalStyle } from './styles/global'
import darkTheme from './styles/themes/dark'

function App() {
  const [selectedMetric, setSelectedMetric] = useState<MetricsEnum | null>(null)

  const MemoizedMetricCalcComponent = useMemo(() => {
    switch (selectedMetric) {
      case MetricsEnum.ProgramVolume:
        return <ProgramVolume />
      case MetricsEnum.SMI:
        return <SMI />
      default:
        return null
    }
  }, [selectedMetric])

  return (
    <ThemeProvider theme={darkTheme}>
      <AppContainer>
        <SelectMetricsContainer>
          <h1>Metrics</h1>
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
