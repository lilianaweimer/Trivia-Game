import React from 'react';
import './AnswerModal.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const AnswerModal = (props) => {
  if (props.correct) {
    return(
      <section className='modal nes-container is-rounded'>
        <p>Correct!</p>
        {(props.lives <= 0 || props.answers === 30) ? 
          <Link to='/gameover'><button className='nes-btn' onClick={props.postScore}>Game Over</button></Link> :
          <button className='nes-btn' onClick={props.incrementQuestion}>Next Question</button>}
      </section>
    )
  } else {
    return (
      <section className='modal nes-container is-rounded'>
        <p>Incorrect.  The correct answer was: {entities.decode(props.correctAnswer)}</p>
        {(props.lives <= 0 || props.answers === 30) ? 
          <Link to='/gameover'><button className='nes-btn' onClick={props.postScore}>Game Over</button></Link> :
          <button className='nes-btn' onClick={props.incrementQuestion}>Next Question</button>}
      </section>
    )
  }
}

AnswerModal.propTypes = {
  answers: PropTypes.number,
  correct: PropTypes.bool,
  correctAnswer: PropTypes.string,
  incrementQuestion: PropTypes.func,
  lives: PropTypes.number,
  postScore: PropTypes.func,
  resetCurrentQuestion: PropTypes.func
}

export default AnswerModal