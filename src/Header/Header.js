import React from 'react'
import { connect } from 'react-redux'
import Lives from '../Lives/Lives'

const Header = (props) => {
  return (
    <header className='header'>
      <div className='question-number'>Question {props.questionCounter + 1}</div>
        <div className='category'>{props.question.category}</div>
      <div className='lives'>
        <Lives lives={props.lives} />
      </div>
    </header>
  )
}

export default Header