import React from 'react'

const AnswerModal = (props) => {
  if (props.correct) {
    return(
      <section className='modal'>
        <p>Correct!</p>
        <button>Next Question</button>
      </section>
    )
  } else {
    <section className='modal'>
      <p>Incorrect.  The correct answer was: {props.correctAnswer}</p>
      <button>Next Question</button>
    </section>
  }
}

export default AnswerModal