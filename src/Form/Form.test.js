import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByText } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(() => ({playerName: 'test', questions: 'test'}))


describe('Form', () => {

    it('should render without crashing', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Form />
                </Provider>
            </BrowserRouter>);
        

      const header = getByText('Welcome to BlahBlah');

      expect(header).toBeInTheDocument();
    });

    it('should render all form inputs', () => {
        const { getByText, getByPlaceholderText } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Form />
                </Provider>
            </BrowserRouter>);

        const nameInput = getByPlaceholderText('Name')
    });

});