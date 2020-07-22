import React from 'react';
import './App.css';
import Form from '../Form/Form';
import TeachersPets from '../TeachersPets/TeachersPets';

import { connect } from 'react-redux'

const App = () => {
  const game = false;
  if(game) {
    return (
      <main className='App'>
        <div className='Page'>
          <section className='header'>
            <div className='question-number'>Question Number</div>
            <div className='category'>Category</div>
            <div className='lives'>Lives</div>
          </section>
          <section className='body'>
            <div className='chalkboard'>Chalkboard</div>
          </section>
        </div>
      </main>
    )
  }
  
  return (
    <main className='App'>
      <Form />
    </main>
  )
}

const mapStateToProps = ({ setPlayerName, setQuestions }) => ({
  playerName: setPlayerName,
  questions: setQuestions
})

export default connect(mapStateToProps)(App);