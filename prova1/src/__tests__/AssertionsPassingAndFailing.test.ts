import { calculatePercentages } from "../components/AssertionsPassingAndFailing"

it('should be able to calculate the assertions passing and failing percentages', () => {
  const totalAssertions = 100
  const passingAssertions = 60
  const failingAssertions = 40

  const result = calculatePercentages({ totalAssertions, passingAssertions, failingAssertions })

  expect(!!result).toBe(true)
  expect(result?.passingPercentage).toBe(60)
  expect(result?.failingPercentage).toBe(40)
})