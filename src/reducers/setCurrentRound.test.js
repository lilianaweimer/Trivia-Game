import { setCurrentRound } from './setCurrentRound'

describe('setCurrentRound reducer', () => {
  it('should return the initial state', () => {
    const expected = 0
    const result = setCurrentRound(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should increment state', () => {
    const expected = 1
    const result = setCurrentRound(undefined, {
      type: 'INCREMENT_CURRENT_ROUND'
    })
    expect(result).toEqual(expected)
  })

  it('should reset the state', () => {
    const expected = 0

    setCurrentRound(undefined, {type: 'INCREMENT_CURRENT_ROUND'})
    setCurrentRound(undefined, {type: 'INCREMENT_CURRENT_ROUND'})

    const result = setCurrentRound(undefined, {})
    expect(result).toEqual(expected)
  })
})