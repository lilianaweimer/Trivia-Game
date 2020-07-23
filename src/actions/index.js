export const setQuestions = questions => ({
  type: 'SET_QUESTIONS',
  questions
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

export const setScore = score => ({
  type: 'SET_SCORE',
  score
})

export const setLives = lives => ({
  type: 'SET_LIVES',
  lives
})

export const setPlayerName = playerName => ({
  type: 'SET_PLAYER_NAME',
  playerName
})

export const setLeaderBoard = leaders => ({
  type: 'SET_LEADER_BOARD',
  leaders
})

export const isPlaying = bool => ({
  type: 'IS_PLAYING',
  isPlaying: bool
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
})
 
export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})