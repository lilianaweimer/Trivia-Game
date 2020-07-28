import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import BuyLifeModal from './BuyLifeModal';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(() => ({}))

describe('AnswerModal', () => {
  it('should render a message and buttons', () => {

    const { getByText, getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <BuyLifeModal 
            buyLife={jest.fn()}
            toggleBuyLifeModal={jest.fn()}
          />
        </Provider>
      </BrowserRouter>
    )

    const title = getByText('Buy Life?')
    const text = getByText('Buying an extra life costs 300 points.', { exact: false })
    const yesBtn = getByRole('button', { name: 'Yes' })
    const noBtn = getByRole('button', { name: 'No' })

    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(yesBtn).toBeInTheDocument()
    expect(noBtn).toBeInTheDocument()
  })

  it('should run a fn on click of the yes btn', () => {
    const mockYes = jest.fn()
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <BuyLifeModal 
            buyLife={mockYes}
            toggleBuyLifeModal={jest.fn()}
          />
        </Provider>
      </BrowserRouter>
    )

    const yesBtn = getByRole('button', { name: 'Yes' })

    fireEvent.click(yesBtn)

    expect(mockYes).toHaveBeenCalledTimes(1)
  })

  it('should run a fn on click of the no btn', () => {
    const mockNo = jest.fn()
    const { getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <BuyLifeModal 
            buyLife={jest.fn()}
            toggleBuyLifeModal={mockNo}
          />
        </Provider>
      </BrowserRouter>
    )

    const noBtn = getByRole('button', { name: 'No' })

    fireEvent.click(noBtn)

    expect(mockNo).toHaveBeenCalledTimes(1)
  })
})
