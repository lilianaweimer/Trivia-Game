import React from 'react';
import './App.css';
import Form from '../Form/Form';
import TeachersPets from '../TeachersPets/TeachersPets';
import Chalkboard from '../Chalkboard/Chalkboard'

import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  const game = false;
  if(game) {
    return (
      <main className='App'>
        <div className='Page'>
          <header className='header'>
            <div className='question-number'>Question Number</div>
            <div className='category'>Category</div>
            <div className='lives'>Lives</div>
          </header>
          <section className='body'>
            <div className='chalkboard'>Chalkboard</div>
          </section>
        </div>
      </main>
    )
  }
  
  return (
    <main className='App'>
      <Switch>
        <Route exact path='/'>
          <Form />
        </Route>
        <Route>
          <Chalkboard />
        </Route>
      </Switch>

    </main>
  )
}

const mapStateToProps = ({ setPlayerName, setQuestions }) => ({
  playerName: setPlayerName,
  questions: setQuestions
})

export default connect(mapStateToProps)(App);