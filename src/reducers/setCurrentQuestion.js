export const setCurrentQuestion = (state = 0, action) => {
  switch(action.type) {
    case 'SET_CURRENT_QUESTION':
      if(state === 6) {
        return {state: 0}
      } else {
      return {state: state + 1}
      }
    default:
      return state
  }
}