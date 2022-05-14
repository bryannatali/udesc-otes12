import { calculateMeasure } from '../components/ProjectMeasure'

it('should be able to calculate the project measure', () => {
  const startedAt = new Date('2022/05/10')
  const shouldEndAt = new Date('2022/06/10')
  const endedAt = new Date('2022/06/21')

  const measure = calculateMeasure({ startedAt, shouldEndAt, endedAt })

  expect(measure).toBe(35.483870967741936)
})