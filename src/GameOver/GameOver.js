import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from '../actions';
import './GameOver.css'

const GameOver = (props) => {
  if (props.playerName) { 
    return (
      <section className='game-over nes-balloon from-left'>
        <h2>GAME OVER</h2>
        <p>Score: {props.score}</p>
        {props.lives > 0 && <p>Lives Left: {props.lives}</p>}
        <Link to='/'><button className='nes-btn' type='submit' onClick={props.reset}>Home</button></Link>
      </section>
    )} 
    if(!props.playerName) {
      return (
        <p>Error: You have no data, how did you get here?</p>
      )
    }
}

const mapStateToProps = ({ setPlayerName, isLoading, hasErrored, setLives, setScore }) => ({
  playerName: setPlayerName,
  isLoading: isLoading,
  error: hasErrored,
  lives: setLives,
  score: setScore,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ reset }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);