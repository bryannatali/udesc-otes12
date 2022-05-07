import ReactSelect, { Props as ReactSelectProps, GroupBase } from 'react-select'
import { useTheme } from 'styled-components'
import { lighten } from 'polished'

import { MetricsEnum } from '../../types/MetricsEnum'

export type Option = {
  value: MetricsEnum
  label: string
}

type SelectProps = ReactSelectProps<Option, false, GroupBase<Option>>

export const Select: React.FC<SelectProps> = (props) => {
  const styledTheme = useTheme()

  return (
    <ReactSelect
      {...props}
      styles={{
        control: (provided) => ({
          ...provided,
          background: styledTheme.colors.background.primary,
        }),
        menu: (provided) => ({
          ...provided,
          zIndex: 12,
          background: styledTheme.colors.background.primary,
        }),
        menuPortal: (provided) => ({ ...provided, zIndex: 12 }),
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? "#fff" : styledTheme.colors.text.primary,
        }),
      }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: lighten(0.1, styledTheme.colors.primary),
          primary25: (() => {
            let colorSplit = styledTheme.colors.primary.substring(1).split("");
            let c = Number("0x" + colorSplit.join(""));
            const newColor =
              "rgba(" +
              [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
              ", 0.5)";
            return newColor;
          })(),
          neutral80: styledTheme.colors.text.primary,
        },
      })}
    />
  )
}