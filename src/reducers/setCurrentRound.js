export const setCurrentRound = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT_CURRENT_ROUND':
      return state + 1
    default:
      return state
  }
}