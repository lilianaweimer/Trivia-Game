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
		const { getAllByTestId } = render(
				<BrowserRouter>
					<Provider store={store}>
            <Lives
              lives={2}
            />
					</Provider>
        </BrowserRouter>);
        
  
    const heart = getAllByTestId('heart');

    expect(heart[0]).toBeInTheDocument();
    expect(heart[1]).toBeInTheDocument();
	});

  it('should render an error message if no lives are given', () => {
		const { getByText, getAllByTestId } = render(
				<BrowserRouter>
					<Provider store={store}>
            <Lives />
					</Provider>
        </BrowserRouter>);
        
  
    const errorMessage = getByText('Error: No Lives Were Given')

    expect(errorMessage).toBeInTheDocument();
	});
});