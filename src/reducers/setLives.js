export const setLives = (state = 3, action) => {
  switch(action.type) {
    case 'DECREMENT_LIVES':
      return state - 1
    default:
      return state
  }
}
