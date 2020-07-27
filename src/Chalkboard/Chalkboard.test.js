import React from 'react';
import ReactDOM from 'react-dom';
import { render as rtlRender, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Chalkboard from './Chalkboard';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const render = (
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
    // incrementCurrentQuestion: () => {this.setCurrentQuestion++},
    // resetCurrentQuestion: () => {this.setCurrentQuestion = 0},
    // incrementCurrentRound: () => {this.setCurrentRound++},
    // decrementLives: () => {this.setLives--},
    // incrementScore: (change) => {this.setScore += change},
    // decrementScore: (change) => {this.setScore -= change}
    })),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <BrowserRouter><Provider store={store}>{children}</Provider></BrowserRouter>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
    
describe('Chalkboard', () => {

    it('should render without crashing', () => {
      const { getByText } = render(<Chalkboard />);
            
      const round = getByText('Round 1: Question 1');
      const answer = getByText('Bandung');
      const question = getByText('What is the capital of Indonesia?');

      expect(round).toBeInTheDocument();
      expect(answer).toBeInTheDocument();
      expect(question).toBeInTheDocument();
    });
    
    it('should check if the answer is correct when one is clicked', () => {
      const { getByText, debug } = render(<Chalkboard />);

      const answer = getByText('Bandung');

      fireEvent.click(answer);
      
      const answerModal = getByText('Incorrect. The correct answer was: Jakarta');

      expect(answerModal).toBeInTheDocument();
    });

    it('should increase score when an answer is correct', () => {
      const { getByText, debug } = render(<Chalkboard />);

      const answer = getByText('Jakarta');
      const score = getByText('0');

      expect(score).toBeInTheDocument();

      fireEvent.click(answer);
      debug()
      
      const updatedScore = getByText('50');

      expect(updatedScore).toBeInTheDocument();

    });

    it('should decrease score when an answer is incorrect', () => {
      const { getByText, debug } = render(<Chalkboard />);

      const answer = getByText('Bandung');

      fireEvent.click(answer);
      
    });

    it('should decrease lives when an answer is incorrect', () => {
      const { getByText, debug } = render(<Chalkboard />);

      const answer = getByText('Bandung');

      fireEvent.click(answer);
      
    });

    it('should not decrease lives when an answer is correct', () => {
      const { getByText, debug } = render(<Chalkboard />);

      const answer = getByText('Jakarta');

      fireEvent.click(answer);
      
    });
		
}) 