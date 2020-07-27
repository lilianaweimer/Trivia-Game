import React from 'react';
import Chalkboard from './Chalkboard';
import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers';

let store;

describe('Chalkboard', () => {
    beforeEach(() => {
      store = createStore(rootReducer, {
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
      })
    })

    it('should render without crashing', () => {
      const { getByText } = render(<MemoryRouter><Provider store={store}><Chalkboard /></Provider></MemoryRouter>);
            
      const round = getByText('Round 1: Question 1');
      const answer = getByText('Bandung');
      const question = getByText('What is the capital of Indonesia?');

      expect(round).toBeInTheDocument();
      expect(answer).toBeInTheDocument();
      expect(question).toBeInTheDocument();
    });
    
    it('should check if the answer is correct when one is clicked', () => {
      const { getByText } = render(<MemoryRouter><Provider store={store}><Chalkboard /></Provider></MemoryRouter>);

      const answer = getByText('Bandung');

      fireEvent.click(answer);
      
      const answerModal = getByText('Incorrect. The correct answer was: Jakarta');

      expect(answerModal).toBeInTheDocument();
    });

    it('should increase score when an answer is correct', () => {
      const { getByText } = render(<MemoryRouter><Provider store={store}><Chalkboard /></Provider></MemoryRouter>);

      const answer = getByText('Jakarta');
      const score = getByText('0');

      expect(score).toBeInTheDocument();

      fireEvent.click(answer);
      
      const updatedScore = getByText('50');

      expect(updatedScore).toBeInTheDocument();
    });

    it('should decrease score when an answer is incorrect', () => {
      const { getByText } = render(<MemoryRouter><Provider store={store}><Chalkboard /></Provider></MemoryRouter>);

      const answer = getByText('Bandung');
      const score = getByText('0');

      fireEvent.click(answer);
      
      const updatedScore = getByText('-25');
      expect(updatedScore).toBeInTheDocument();
    });

    it('should decrease lives when an answer is incorrect', () => {
      const { getByText, getAllByTestId } = render(<MemoryRouter><Provider store={store}><Chalkboard /></Provider></MemoryRouter>);

      const answer = getByText('Bandung');
      const lives = getAllByTestId('heart');
      expect(lives.length).toBe(3);

      fireEvent.click(answer);

      const newLives = getAllByTestId('heart');
      expect(newLives.length).toBe(2);
    });

    it('should not decrease lives when an answer is correct', () => {
      const { getByText, getAllByTestId } = render(<MemoryRouter><Provider store={store}><Chalkboard /></Provider></MemoryRouter>);

      const answer = getByText('Jakarta');
      const lives = getAllByTestId('heart');
      expect(lives.length).toBe(3);

      fireEvent.click(answer);

      const newLives = getAllByTestId('heart');
      expect(newLives.length).toBe(3);
    });

    it('should render the next question after a question is answered', () => {
      const { getByText, debug } = render(<MemoryRouter><Provider store={store}><Chalkboard /></Provider></MemoryRouter>);

      const answer = getByText('Jakarta');

      fireEvent.click(answer);

      const nextButton = getByText('Next Question');

      fireEvent.click(nextButton);
      
      const newQuestion = getByText('Jaguar Cars was previously owned by which car manfacturer?');

      expect(newQuestion).toBeInTheDocument();
    });
		
}) 