import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import TeachersPets from './TeachersPets';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(() => ({setTeachersPets: [{id: 1, initials: 'ABC', score: 345}, {id: 2, initials: 'DEF', score: 567}, {id: 3, initials: 'GHI', score: 789}]}))

describe('TeachersPets', () => {
  it('should render a header of teachersPets', () => {
    const store = createStore(() => ({setTeachersPets: [{id: 1, initials: 'ABC', score: 345}, {id: 2, initials: 'DEF', score: 567}, {id: 3, initials: 'GHI', score: 789}]}))
    
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <TeachersPets />
        </Provider>
      </BrowserRouter>
    )
    
    const title = getByText('Teacher\'s Pets:')
    const entry1 = getByText('ABC: 345')
    const entry2 = getByText('DEF: 567')
    const entry3 = getByText('GHI: 789')
    const button = getByRole('button')

    expect(title).toBeInTheDocument()
    expect(entry1).toBeInTheDocument()
    expect(entry2).toBeInTheDocument()
    expect(entry3).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should display a message if no scores are stored', () => {
    const store = createStore(() => ({setTeachersPets: []}))

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <TeachersPets />
        </Provider>
      </BrowserRouter>
    )

    const title = getByText('No high scores')

    expect(title).toBeInTheDocument()
  })
})
