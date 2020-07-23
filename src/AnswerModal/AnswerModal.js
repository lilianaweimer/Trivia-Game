import React from 'react'
import './AnswerModal.css'

const AnswerModal = (props) => {
  if (props.correct) {
    return(
      <section className='modal'>
        <p>Correct!</p>
        <button onClick={props.incrementCurrentQuestion}>Next Question</button>
      </section>
    )
  } else {
    return (
      <section className='modal'>
        <p>Incorrect.  The correct answer was: {props.correctAnswer}</p>
        <button onClick={props.incrementCurrentQuestion}>Next Question</button>
      </section>
    )
  }
}

export default AnswerModal