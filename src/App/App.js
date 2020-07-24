import React from 'react';
import './App.css';
import Form from '../Form/Form';
import TeachersPets from '../TeachersPets/TeachersPets';
import Chalkboard from '../Chalkboard/Chalkboard';
import GameOver from '../GameOver/GameOver';

import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { hasErrored } from '../actions';
// import { setCurrentRound } from '../actions';

class App extends React.Component {

  render() {
    if(this.props.error) {
      return (
        <p>{this.props.error}</p>
      )
    }
    if(this.props.isLoading) {
      return (
        <p>Loading...</p>
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

const mapStateToProps = ({ setPlayerName, setQuestions, setCurrentQuestion, setCurrentRound, isLoading, hasErrored, setLives }) => ({
  playerName: setPlayerName,
  questions: setQuestions,
  currentQuestion: setCurrentQuestion,
  currentRound: setCurrentRound,
  isLoading: isLoading,
  error: hasErrored,
  lives: setLives
})

export default connect(mapStateToProps)(App);