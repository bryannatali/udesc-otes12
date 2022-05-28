import { BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts'

import { data } from '../../utils/data'
import { CustomTooltip } from '../Tooltip'

export const Chart: React.FC = () => {
  return (
    <BarChart width={1200} height={700} data={data}>
      <Bar type="monotone" dataKey="defects" fill="#4d42b0" />
      <XAxis
        dataKey="year"
        interval={0}
        stroke="#fff"
      />
      <YAxis dataKey="defects" stroke="#fff" />
      <Tooltip content={<CustomTooltip />} />
    </BarChart>
  )
}