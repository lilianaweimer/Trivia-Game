const initialState = 0

export const setScore = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT_SCORE':
      return state + action.score
    case 'DECREMENT_SCORE':
      return state - action.score
    default:
      return state
  }
}
