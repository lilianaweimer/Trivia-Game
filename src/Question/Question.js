import React from 'react'
import { connect } from 'react-redux'
import './Question.css'
var decode = require('unescape')

const Question = (props) => {
  if (props.question) {
    let fixedQuestion = props.question
    if (props.question.includes('&quot;')) {
      fixedQuestion = props.question.replace(/&quot;/gi, '"')
    }
    if (props.question.includes('&#039;')) {
      fixedQuestion = props.question.replace(/&#039;/gi, "'")
    }
    return (
      <section className='question-container'>
        <p>{decode(fixedQuestion)}</p>
      </section>
    )
  } else {
    return (
      <p>Error: No Question Provided</p>
    )
  }
}

export default Question