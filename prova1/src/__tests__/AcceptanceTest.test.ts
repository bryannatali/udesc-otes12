import { calculateAcceptance } from '../components/AcceptanceTest'

it('should be able to calculate the acceptance test', () => {
  const totalAcceptanceTests = 20
  const totalPreviousAcceptanceTests = 15

  const acceptance = calculateAcceptance({ totalAcceptanceTests, totalPreviousAcceptanceTests })

  expect(acceptance).toBe(5)
})