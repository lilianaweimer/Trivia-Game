import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Lives from './Lives';
import Header from '../Header/Header';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({setLives: 1}))

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
        
    const lives = getByText('2');

    expect(lives).toBeInTheDocument();
	}); 

});