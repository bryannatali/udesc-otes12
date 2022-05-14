import renderer from 'react-test-renderer'

import { RE } from '../components/RE'

import 'jest-styled-components'

it('should be able to call handleCalculate function', () => {
  const component = renderer.create(
    <RE />
  )

  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})