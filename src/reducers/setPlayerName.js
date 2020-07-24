const initialState = '';

export const setPlayerName = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER_NAME':
      return action.playerName
    case 'RESET':
      return initialState
    default: 
      return state
  }
}