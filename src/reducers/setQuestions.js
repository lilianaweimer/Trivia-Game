export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErrored = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.message
    default:
      return state
  }
}

const initialState = [];

export const setQuestions = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return [...state, action.questions]
    case 'RESET':
      return initialState
    default:
      return state
  }
}



