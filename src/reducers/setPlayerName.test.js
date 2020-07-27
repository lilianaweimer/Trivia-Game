import { setPlayerName } from './setPlayerName'

describe('setPlayerName reducer', () => {
  it('should return the initial state', () => {
    const expected = ''
    const result = setPlayerName(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set the name in state', () => {
    const expected = 'BAM'
    const result = setPlayerName(undefined, {
      type: 'SET_PLAYER_NAME',
      playerName: 'BAM'
    })
    expect(result).toEqual(expected)
  })

  it('should reset the state', () => {
    const expected = ''

    setPlayerName(undefined, {
      type: 'SET_PLAYER_NAME',
      playerName: 'BAM'
    })

    const result = setPlayerName(undefined, {
      type: 'RESET'
    })
    
    expect(result).toEqual(expected)  
  })
})