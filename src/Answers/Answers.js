import React from 'react'
import { connect } from 'react-redux'

const Answers = (props) => {
  const correctAnswer = props.question.correct_answer
  const incorrectAnswers = props.question.incorrect_answers
  const allAnswers = [...incorrectAnswers, correctAnswer]
  const shuffledAnswers = allAnswers.sort(() => .5 - Math.random())
  const mappedAnswers = shuffledAnswers.map((answer, i) => {
    return (
      <p key={i}value={answer}>{answer}</p>
    )
  })
  return (
    <section className='answer-container'>
      {mappedAnswers}
    </section>
  )
}

export default Answers