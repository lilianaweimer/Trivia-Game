import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Chalkboard from './Chalkboard';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({playerName: 'test', questions: 'test'}))

describe('Chalkboard', () => {

    it('should render without crashing', () => {
      //   const { getByText } = render(
      //       <BrowserRouter>
      //           <Provider store={store}>
      //               <Chalkboard />
      //           </Provider>
      //       </BrowserRouter>);
        

      // const question = getByText('Question');

      // expect(question).toBeInTheDocument();
		})
		
}) 