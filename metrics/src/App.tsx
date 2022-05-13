import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { metricsOptions } from './data/metricsOptions'
import { MetricsEnum } from './types/MetricsEnum'

import { Select } from './components/Select'
import { ProgramVolume } from './components/ProgramVolume'
import { SMI } from './components/SMI'
import { Integrity } from './components/Integrity'
import { DRE } from './components/DRE'
import { RE } from './components/RE'

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
      case MetricsEnum.Integrity:
        return <Integrity />
      case MetricsEnum.DRE:
        return <DRE />
      case MetricsEnum.RE:
        return <RE />
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
