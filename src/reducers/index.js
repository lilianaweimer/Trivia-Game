import { combineReducers } from 'redux'
import { setQuestions } from './setQuestions'
import { setTeachersPets } from './setTeachersPets'
import { setCurrentRound } from './setCurrentRound' 
import { setCurrentQuestion } from './setCurrentQuestion' 
import { setScore } from './setScore'  
import { setLives } from './setLives'  
import { setPlayerName } from './setPlayerName'  
import { isLoading } from './isLoading' 
import { hasErrored } from './hasErrored'

export const rootReducer = combineReducers({
  setQuestions,
  setTeachersPets,
  setCurrentRound,
  setCurrentQuestion,
  setScore,
  setLives,
  setPlayerName,
  isLoading,
  hasErrored
})