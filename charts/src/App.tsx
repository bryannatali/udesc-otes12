import Boxplot, { computeBoxplotStats } from "react-boxplot"
import { median, mean, mode } from "jsmaths"

import { data } from "./utils/data"

import { Chart } from "./components/Chart"

import './styles/App.css'

const defectsArr = data.map(({ defects }) => defects)

function App() {
  const meanResult = mean(defectsArr)
  const medianResult = median(defectsArr)
  const modeResult = mode(defectsArr)

  return (
    <div className="app-container">
      <h1>Charts</h1>

      <Chart />

      <span>Média: {meanResult}</span>
      <span>Mediana: {medianResult}</span>
      {modeResult.length > 0 ? <span>Moda: {modeResult}</span> : <span>Sem moda</span>}

      <div className="box-plot-container">
        <Boxplot
          width={1000}
          height={300}
          orientation="horizontal"
          min={Math.min(...defectsArr)}
          max={Math.max(...defectsArr)}
          stats={computeBoxplotStats(defectsArr)}
        />
      </div>
    </div>
  )
}

export default App
