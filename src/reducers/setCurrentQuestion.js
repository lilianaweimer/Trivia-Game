export const setCurrentQuestion = (state = 0, action) => {
  switch(action.type) {
    case 'SET_CURRENT_QUESTION':
      return {state: state + 1}
    default:
      return state
  }
}