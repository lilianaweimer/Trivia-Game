const initialState = 0;

export const setCurrentRound = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT_CURRENT_ROUND':
    return state + 1
  case 'RESET':
    return initialState
  default:
    return state
  }
}