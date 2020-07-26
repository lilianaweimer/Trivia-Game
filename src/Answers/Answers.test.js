import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Answers from './Answers';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(() => ({playerName: 'test', questions: [[
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
]]

}))

const checkAnswer = jest.fn()

const question = {
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
  }

describe('Answers', () => {

  it('should render without crashing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Answers  
            question={question} 
            checkAnswer={checkAnswer}/>
        </Provider>
      </BrowserRouter>
    )
    const answer1 = getByText('Jakarta')
    const answer2 = getByText('Bandung')
    const answer3 = getByText('Medan')
    const answer4 = getByText('Palembang')

    expect(answer1).toBeInTheDocument()
    expect(answer2).toBeInTheDocument()
    expect(answer3).toBeInTheDocument()
    expect(answer4).toBeInTheDocument()
  });

  it('should check if the answer is correct when an answer is clicked', () => {
    
  })
})