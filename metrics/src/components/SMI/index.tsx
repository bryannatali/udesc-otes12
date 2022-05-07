import { Button } from "../Button"
import { InputGroup } from "../InputGroup"
import { UnformInput } from "../UnformInput"

import { SMIContainer } from "./styles"

export const SMI: React.FC = () => {
  return (
    <SMIContainer onSubmit={data => console.log(data)}>
      <h1 style={{ marginBottom: '2rem' }}>Índice de Maturidade de Software - SMI</h1>

      <UnformInput
        name="Mt"
        label="Nº de Módulos da Versão Atual"
        placeholder="Ex: 12"
        containerStyle={{ marginBottom: '1.5rem' }}
      />

      <InputGroup>
        <UnformInput
          name="Fc"
          label="Nº de Módulos Alterados"
          placeholder="Ex: 3"
        />

        <UnformInput
          name="Fa"
          label="Nº de Módulos Acrescentados"
          placeholder="Ex: 2"
        />
      </InputGroup>

      <UnformInput
        name="Mt"
        label="Nº de Módulos da Versão Anterior excluídos na Versão Atual"
        placeholder="Ex: 4"
        containerStyle={{ marginTop: '1.5rem' }}
      />

      <Button type="submit">Calcular</Button>
    </SMIContainer>
  )
}