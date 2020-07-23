import React from 'react'
import { connect } from 'react-redux'

const Question = (props) => {
  return (
    <section className='question-container'>
      <p>{props.question}</p>
    </section>
  )
}

export default Question