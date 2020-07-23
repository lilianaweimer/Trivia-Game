export const setCurrentRound= (state = 0, action) => {
  switch(action.type) {
    case 'SET_CURRENT_ROUND':
      return {state: state + 1}
    default:
      return state
  }
}