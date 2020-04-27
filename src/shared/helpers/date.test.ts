import { formatDate } from './date'

describe('Date helper functions', () => {
  it('should return Apr 27, 2020', () => {
    expect(formatDate('2020-04-27')).toEqual('Apr 27, 2020')
  })
})
