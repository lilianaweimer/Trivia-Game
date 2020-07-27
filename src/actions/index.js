export const setQuestions = questions => ({
  type: 'SET_QUESTIONS',
  questions
})

export const setTeachersPets = teachersPets => ({
  type: 'SET_TEACHERS_PETS',
  teachersPets
})

export const incrementCurrentRound = () => ({
  type: 'INCREMENT_CURRENT_ROUND',
})

export const incrementCurrentQuestion = () => ({
  type: 'INCREMENT_CURRENT_QUESTION',
})

export const resetCurrentQuestion = () => ({
  type: 'RESET_CURRENT_QUESTION',
})

export const incrementScore = score => ({
  type: 'INCREMENT_SCORE',
  score
})

export const decrementScore = score => ({
  type: 'DECREMENT_SCORE',
  score
})

export const decrementLives = () => ({
  type: 'DECREMENT_LIVES',
})

export const setPlayerName = playerName => ({
  type: 'SET_PLAYER_NAME',
  playerName
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
})
 
export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const reset = () => ({
  type: 'RESET'
})