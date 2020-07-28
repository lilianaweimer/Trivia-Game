import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {
  isLoading: false,
  hasErrored: '',
  setPlayerName: 'test', 
  setQuestions: [[
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
}, applyMiddleware(thunk))

describe('App', () => {
  it('should render the form component upon mount', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )

    const form = getByText('Welcome to', {exact: false})
    expect(form).toBeInTheDocument()
  });

  it('should render the loading screen when the submit button is clicked', () => {
    const { getByDisplayValue, getByText, getByPlaceholderText, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>);

    const submit = getByDisplayValue('Play!');

    const nameInput = getByPlaceholderText('Name');
    const roundOne = getByTestId('round1');
    const roundTwo = getByTestId('round2');
    const roundThree = getByTestId('round3');
    const roundFour = getByTestId('round4');
    const roundFive = getByTestId('round5');
    const roundSix = getByTestId('round6');

    fireEvent.change(nameInput, {target: {value: 'somebody'}});
    fireEvent.change(roundOne, {target: {value: '23'}});
    fireEvent.change(roundTwo, {target: {value: '22'}});
    fireEvent.change(roundThree, {target: {value: '19'}});
    fireEvent.change(roundFour, {target: {value: '25'}});
    fireEvent.change(roundFive, {target: {value: '17'}});
    fireEvent.change(roundSix, {target: {value: '10'}});

    fireEvent.click(submit);

    const loading = getByText('Loading')
  });
})
