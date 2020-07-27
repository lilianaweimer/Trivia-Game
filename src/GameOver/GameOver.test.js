import React from 'react';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import GameOver from './GameOver';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


describe('Game Over', () => {
  const store = createStore(() => ({setPlayerName: 'Bill', setScore: 10, setLives: 1}))

	it('should render without crashing', () => {
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<GameOver />
				</Provider>
			</BrowserRouter>
		);

		const gameover = getByText('GAME OVER');

		expect(gameover).toBeInTheDocument();
	});

	it('should render the score', () => {
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<GameOver />
				</Provider>
			</BrowserRouter>
		);

		const score = getByText('Score: 10');
		
		expect(score).toBeInTheDocument();
	});

	it('should render the remaining lives', () => {
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<GameOver />
				</Provider>
			</BrowserRouter>
		);

			const lives = getByText('Lives Left: 1');
			
			expect(lives).toBeInTheDocument();
  });
})

describe('GameOver Sad Path', () => {
  it('should render an error if the store is empty', () => {
    const store = createStore(() => ({}))
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<GameOver />
				</Provider>
			</BrowserRouter>);

			const errorMsg = getByText('Error: You have no data, how did you get here?');
			
      expect(errorMsg).toBeInTheDocument();
    })  
})
      
