import { setLives } from './setLives'

describe('setLives reducer', () => {
  it('should return the initial state', () => {
    const expected = 3
    const result = setLives(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should decrement state', () => {
    const expected = 2
    const result = setLives(undefined, {
      type: 'DECREMENT_LIVES'
    })
    expect(result).toEqual(expected)
  })

  it('should reset state', () => {
    const expected = 3

    setLives(undefined, {type: 'DECREMENT_LIVES'})
    setLives(undefined, {type: 'DECREMENT_LIVES'})

    const result = setLives(undefined, {
      type: 'RESET'
    })
    expect(result).toEqual(expected)
  })
})