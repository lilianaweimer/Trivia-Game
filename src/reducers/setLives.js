const initialState = 3;

export const setLives = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT_LIVES':
    return state + 1
  case 'DECREMENT_LIVES':
    return state - 1
  case 'RESET':
    return initialState
  default:
    return state
  }
}
