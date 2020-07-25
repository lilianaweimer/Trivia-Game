import React from 'react'
import { connect } from 'react-redux'
import Lives from '../Lives/Lives'
import './Header.css'

const Header = (props) => {
  return (
    <header className='header nes-container'>
      <div className='question-number'>Question {props.questionCounter + 1}</div>
        <div className='category'>Round {props.currentRound + 1}: {props.question.category}</div>
      <div className='lives'>
        Lives: <Lives lives={props.lives} />
        Score: {props.score}
      </div>
    </header>
  )
}

export default Header