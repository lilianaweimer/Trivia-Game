import React from 'react'
import { connect } from 'react-redux'
import './Question.css'
import PropTypes from 'prop-types';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const Question = (props) => {
  if (props.question) {
    let fixedQuestion = props.question
    return (
      <section className='question-container'>
        <p>{entities.decode(fixedQuestion)}</p>
      </section>
    )
  } else {
    return (
      <p>Error: No Question Provided</p>
    )
  }
}

Question.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool
}

export default Question