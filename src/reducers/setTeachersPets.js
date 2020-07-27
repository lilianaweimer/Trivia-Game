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

const initialState = []

export const setTeachersPets = (state = initialState, action) => {
  console.log(action.teachersPets, 'IN REDUCER')
  switch (action.type) {
    case 'SET_TEACHERS_PETS':
      return action.teachersPets
    default:
      return initialState
  }
}