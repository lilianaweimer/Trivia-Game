import React from 'react';
import './App.css';
import Form from '../Form/Form';
import TeachersPets from '../TeachersPets/TeachersPets';
import Chalkboard from '../Chalkboard/Chalkboard';
import GameOver from '../GameOver/GameOver';

import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { hasErrored } from '../actions';

class App extends React.Component {

  render() {
    if(this.props.error) {
      return (
        <p>{this.props.error}</p>
      )
    }
    if(this.props.isLoading) {
      return (
        <main className='App'>
          <p className='loading'>Loading<span>.</span><span>.</span><span>.</span></p>
        </main>
      )
    }
  
    return (
      <main className='App'>
        <Switch>
          <Route exact path='/'>
            <Form />
          </Route>
          <Route path='/play'>
            <Chalkboard />
          </Route>
          <Route path='/gameover'>
            <GameOver />
          </Route>
        </Switch>
      </main>
    )
  }
}

const mapStateToProps = ({ isLoading, hasErrored }) => ({
  // playerName: setPlayerName,
  // questions: setQuestions,
  // currentQuestion: setCurrentQuestion,
  // currentRound: setCurrentRound,
  isLoading: isLoading,
  error: hasErrored,
  // lives: setLives,
  // teachersPets: teachersPets
})

export default connect(mapStateToProps)(App);