import React from 'react';
import './App.css';
import Form from '../Form/Form';
import TeachersPets from '../TeachersPets/TeachersPets';
import Chalkboard from '../Chalkboard/Chalkboard'

import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
// import { setCurrentRound } from '../actions';

const App = () => {

  return (
    <main className='App'>
      <Switch>
        <Route exact path='/'>
          <Form />
        </Route>
        <Route path='/play'>
          <Chalkboard />
        </Route>
      </Switch>

    </main>
  )
}

const mapStateToProps = ({ setPlayerName, setQuestions, setCurrentQuestion, setCurrentRound }) => ({
  playerName: setPlayerName,
  questions: setQuestions,
  currentQuestion: setCurrentQuestion,
  currentRound: setCurrentRound
})

export default connect(mapStateToProps)(App);