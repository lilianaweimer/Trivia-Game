export const setPlayerName = (state = '', action) => {
  switch (action.type) {
    case 'SET_PLAYER_NAME':
      return action.playerName
    default: 
      return state
  }
}