import React from 'react';
import { render, render as rtlRender, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';
import Chalkboard from '../Chalkboard/Chalkboard'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {
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

describe('Form', () => {

  it('should render without crashing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );

    const header = getByText('Welcome to Chalkboard Trivia!');
    expect(header).toBeInTheDocument();
  });

  it('should render all form inputs', () => {
    const { getByTestId, getByPlaceholderText, getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>);
    const nameInput = getByPlaceholderText('Name');
    const roundOne = getByTestId('round1');
    const roundTwo = getByTestId('round2');
    const roundThree = getByTestId('round3');
    const roundFour = getByTestId('round4');
    const roundFive = getByTestId('round5');
    const roundSix = getByTestId('round6');
    const playButton = getByRole('button');

    expect(nameInput).toBeInTheDocument();
    expect(roundOne).toBeInTheDocument();
    expect(roundTwo).toBeInTheDocument();
    expect(roundThree).toBeInTheDocument();
    expect(roundFour).toBeInTheDocument();
    expect(roundFive).toBeInTheDocument();
    expect(roundSix).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();
  });

  it('should be able to fill the form out', () => {
    const { getByTestId, getByPlaceholderText, getByDisplayValue } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>);

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

    const changedName = getByDisplayValue('somebody');
    const changedRoundOne = getByDisplayValue('History');

    expect(changedName).toBeInTheDocument();
    expect(changedRoundOne).toBeInTheDocument();
  });

});