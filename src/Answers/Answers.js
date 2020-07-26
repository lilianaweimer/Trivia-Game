import React from 'react'
import { connect } from 'react-redux'
import './Answers.css'
var decode = require('unescape');

const Answers = (props) => {
  const correctAnswer = props.question.correct_answer
  const incorrectAnswers = props.question.incorrect_answers
  const allAnswers = [...incorrectAnswers, correctAnswer]
  const shuffledAnswers = allAnswers.sort(() => .5 - Math.random())
  const mappedAnswers = shuffledAnswers.map((answer, i) => {
    return (
      <label key={i} id={answer}>
        <input type='radio' className='nes-radio is-dark' checked/>
      <span 
        key={i} 
        id={answer}
        onClick={e => props.checkAnswer(e)}
        >
        {decode(answer)}
      </span>

      </label>
    )
  })
  return (
    <section className='answer-container'>
      {mappedAnswers}
    </section>
  )
}

export default Answers