import React from 'react'
import { connect } from 'react-redux'
import Lives from '../Lives/Lives'
import PropTypes from 'prop-types';
import './Header.css'

const Header = (props) => {
  return (
    <header className='header nes-container'>
      <section className='question-number'>
        Score: 
        <p>{props.score}</p>
      </section>
        <section className='category'>Round {props.currentRound + 1}: Question {props.questionCounter + 1} <p>{props.question.category}</p></section>
      <section className='lives'>
        Lives: <Lives lives={props.lives} />
      </section>
      <button className='nes-btn' onClick={props.toggleBuyLifeModal}>+</button>
    </header>
  )
}

Header.propTypes = {
  currentRound: PropTypes.number, 
  lives: PropTypes.number,
  question: PropTypes.object,  
  questionCounter: PropTypes.number,
  score: PropTypes.number
}

export default Header