export const setQuestions = questions => ({
  type: 'SET_QUESTIONS',
  questions
})

export const setCurrentRound = currentRound => ({
  type: 'SET_CURRENT_ROUND',
  currentRound
})

export const setCurrentQuestion = currentQuestion => ({
  type: 'SET_CURRENT_QUESTION',
  currentQuestion
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

export const isLoading = bool => (
console.log('Im running', bool),
{
  type: 'IS_LOADING',
  isLoading: bool
})
 
export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})