import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <header className='header'>
      <div className='question-number'>Question {props.questionCounter + 1}</div>
        <div className='category'>{props.question.category}</div>
      <div className='lives'>Lives</div>
    </header>
  )
}

export default Header