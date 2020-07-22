import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  questions,
  currentRound,
  currentQuestion,
  score,
  lives,
  name,
  leaderboard,
  gameStatus,
})