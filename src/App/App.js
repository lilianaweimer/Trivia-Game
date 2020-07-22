import React from 'react';
import './App.css';
import Form from '../Form/Form';
import TeachersPets from '../TeachersPets/TeachersPets';
import Chalkboard from '../Chalkboard/Chalkboard'

import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

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

const mapStateToProps = ({ setPlayerName, setQuestions }) => ({
  playerName: setPlayerName,
  questions: setQuestions
})

export default connect(mapStateToProps)(App);