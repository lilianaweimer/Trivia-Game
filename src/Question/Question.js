import React from 'react'
import { connect } from 'react-redux'
import './Question.css'

const Question = (props) => {
  let fixedQuestion = props.question
  if (props.question.includes('&quot;')) {
    fixedQuestion = props.question.replace(/&quot;/gi, '"')
  }
  if (props.question.includes('&#039;')) {
    fixedQuestion = props.question.replace(/&#039;/gi, "'")
  }

  return (
    <section className='question-container'>
      <p>{`${fixedQuestion}`}</p>
    </section>
  )
}

export default Question