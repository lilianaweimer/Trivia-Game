import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Question from './Question';
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

const question = 'What is the capital of Indonesia?'

describe('Question', () => {

  it('should render without crashing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Question  
            question={question} 
          />
        </Provider>
      </BrowserRouter>
    )
    const questionOnDOM = getByText('What is the capital of Indonesia?')

    expect(questionOnDOM).toBeInTheDocument()
  })
})