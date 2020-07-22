import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  questions,
  currentRound,
  currentQuestion,
  score,
  lives,
  playerName,
  leaderboard,
  isPlaying,
  isLoading,
  error
})