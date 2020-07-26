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
		

    const round = getByText('Round 4: Question 2');
    const category = getByText('test category');
    const lives = getByText('Lives:');
    const score = getByText('Score:');
    const scoreNum = getByText('4');

    expect(round).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(lives).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(scoreNum).toBeInTheDocument();
	}); 

});
