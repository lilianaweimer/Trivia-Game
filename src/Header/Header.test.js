import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({setScore: 10, setLives: 1}))

describe('Header', () => {

	it('should render without crashing', () => {
		const { getByText } = render(
				<BrowserRouter>
					<Provider store={store}>
            <Header 
              question={{category: 'test category'}}
              questionCounter={1} 
              lives={2}
              currentRound={3}
              score={4}
            />
					</Provider>
				</BrowserRouter>);
		

    const question = getByText('Question 2');
    const round = getByText('Round 4: test category');
    const lives = getByText('2');
    const score = getByText('Lives: Score: 4');
    //these live in the same element ('Lives:' and 'Score:')
    //so we need to test for them together
    //also, the lives live in their own element (the actual #)
    //so they need to be tested for separately 

    expect(question).toBeInTheDocument();
    expect(round).toBeInTheDocument();
    expect(lives).toBeInTheDocument();
    expect(score).toBeInTheDocument();
	}); 

});
