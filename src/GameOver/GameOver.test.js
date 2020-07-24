import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import GameOver from './GameOver';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({setScore: 10, setLives: 1}))

describe('Game Over', () => {

	it('should render without crashing', () => {
		const { getByText } = render(
				<BrowserRouter>
					<Provider store={store}>
							<GameOver />
					</Provider>
				</BrowserRouter>);
		

		const gameover = getByText('GAME OVER');

		expect(gameover).toBeInTheDocument();
	});

	it('should render the score', () => {
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<GameOver />
				</Provider>
			</BrowserRouter>);

			const score = getByText('Score: 10');
			
			expect(score).toBeInTheDocument();
	});

	it('should render the remaining lives', () => {
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<GameOver />
				</Provider>
			</BrowserRouter>);

			const lives = getByText('Lives Left: 1');
			
			expect(lives).toBeInTheDocument();
	});

})