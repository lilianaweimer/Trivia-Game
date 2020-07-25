import React from 'react'
import { connect } from 'react-redux'
import Lives from '../Lives/Lives'
import './Header.css'

const Header = (props) => {
  return (
    <header className='header nes-container'>
      <div className='question-number'>
        Score: 
        <p>{props.score}</p>
       </div>
        <div className='category'>Round {props.currentRound + 1}: Question {props.questionCounter + 1} <p>{props.question.category}</p></div>
      <div className='lives'>
        Lives: <Lives lives={props.lives} />
      </div>
    </header>
  )
}

export default Header