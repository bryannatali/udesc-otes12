import { calculateTestCasesAndAssertions } from "../components/TestCasesAndAssertions"

it('should be able to calculate test cases and assertions', () => {
  const loc = 500
  const a = 100
  const ct = 300

  const result = calculateTestCasesAndAssertions({ loc, a, ct })

  expect(!!result).toBeTruthy()
  expect(result?.assertions).toBe(a / loc)
  expect(result?.testCases).toBe(ct / loc)
})