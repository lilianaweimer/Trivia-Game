import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Lives from './Lives';
import Header from '../Header/Header';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({setLives: 1}))

describe('Lives', () => {

	it('should render without crashing', () => {
		const { getByText, getAllByTestId } = render(
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
        
    const lives = getByText('Lives:');
    const heart = getAllByTestId('heart');

    expect(lives).toBeInTheDocument();
    expect(heart[0]).toBeInTheDocument();
    expect(heart[1]).toBeInTheDocument();
	});

});