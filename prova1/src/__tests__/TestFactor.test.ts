import { calculateTestFactor } from "../components/TestFactor"

it('should be able to calculate the test factor', () => {
  const loc = 1200
  const lot = 532

  const testFactor = calculateTestFactor({ loc, lot })

  expect(!!testFactor).toBeTruthy()
  expect(testFactor).toBe(lot / loc)
})