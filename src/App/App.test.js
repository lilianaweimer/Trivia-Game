import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const store = createStore(() => ({ isLoading: false, hasErrored: ''}))

describe('App', () => {
  it('should render the form component upon mount', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )

    const form = getByText('Welcome to', {exact: false})
    expect(form).toBeInTheDocument()
  })
})
