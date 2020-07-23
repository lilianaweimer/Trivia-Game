export const setLives = (state = 3, action) => {
  switch(action.type) {
    case 'SET_LIVES':
      return state - 1
    default:
      return state
  }
}
