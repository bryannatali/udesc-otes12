import { TooltipProps } from "recharts"

export const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  payload, active,
}) => {
  if (payload && payload[0] && active) {
    return (
      <span className="tooltip-container">
        Defeitos: {payload[0].value}
      </span>
    )
  }

  return null
}