import React from 'react'
import { connect } from 'react-redux'
import './Answers.css'
import PropTypes from 'prop-types';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const Answers = (props) => {
  if (props.question) {  
  const correctAnswer = props.question.correct_answer
  const incorrectAnswers = props.question.incorrect_answers
  const allAnswers = [...incorrectAnswers, correctAnswer]
  const shuffledAnswers = allAnswers.sort(() => .5 - Math.random())
  const mappedAnswers = shuffledAnswers.map((answer, i) => {
    return (
      <label key={i} id={answer}>
        <input type='radio' className='nes-radio is-dark' checked readOnly/>
      <span 
        key={i} 
        id={answer}
        onClick={e => props.checkAnswer(e)}
        >
        {entities.decode(answer)}
      </span>

      </label>
    )
  })
  return (
    <section className='answer-container'>
      {mappedAnswers}
    </section>
  )} else {
    return <p>Error: No Answers Provided</p>
  }
}

Answers.propTypes = {
  question: PropTypes.object,
  checkAnswer: PropTypes.func
}

export default Answers