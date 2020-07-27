import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { 
  incrementCurrentQuestion, 
  resetCurrentQuestion,
  incrementCurrentRound, 
  decrementLives,
  incrementScore,
  decrementScore
} from '../actions';

export const render = (
  ui,
  {
    initialState,
    store = createStore(() => ({
      setPlayerName: 'test', setQuestions: [[
      {
      "category": "Geography",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the capital of Indonesia?",
      "correct_answer": "Jakarta",
      "incorrect_answers": [
      "Bandung",
      "Medan",
      "Palembang"
      ]
      },
      {
      "category": "Vehicles",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Jaguar Cars was previously owned by which car manfacturer?",
      "correct_answer": "Ford",
      "incorrect_answers": [
      "Chrysler",
      "General Motors",
      "Fiat"
      ]
      }
    ]],
    setCurrentRound: 0,
    setCurrentQuestion: 0,
    setScore: 0,
    setLives: 3,
    incrementCurrentQuestion: incrementCurrentQuestion,
    resetCurrentQuestion: resetCurrentQuestion,
    incrementCurrentRound: incrementCurrentRound,
    decrementLives: decrementLives,
    incrementScore: incrementScore,
    decrementScore: decrementScore
    })),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <MemoryRouter><Provider store={store}>{children}</Provider></MemoryRouter>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}