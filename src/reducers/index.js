import { combineReducers } from 'redux'
import { setQuestions } from './setQuestions'
import { setCurrentRound } from './setCurrentRound' 
import { setCurrentQuestion } from './setCurrentQuestion' 
import { setScore } from './setScore'  
import { setLives } from './setLives'  
import { setPlayerName } from './setPlayerName'  
import { setLeaderBoard } from './setLeaderBoard'
import { isPlaying } from './isPlaying'
import { isLoading } from './isLoading' 
import { hasErrored } from './hasErrored'

export const rootReducer = combineReducers({
  setQuestions,
  setCurrentRound,
  setCurrentQuestion,
  setScore,
  setLives,
  setPlayerName,
  setLeaderBoard,
  isPlaying,
  isLoading,
  hasErrored
})