import React from 'react';
import './AnswerModal.css';
import { Link } from 'react-router-dom';
var decode = require('unescape')

const AnswerModal = (props) => {
  if (props.correct) {
    return(
      <section className='modal'>
        <p>Correct!</p>
        {(props.lives <= 0 || props.answers === 30) ? 
          <Link to='/gameover'><button className='nes-btn' onClick={props.postScore}>Game Over</button></Link> :
          <button className='nes-btn' onClick={props.incrementQuestion}>Next Question</button>}
      </section>
    )
  } else {
    return (
      <section className='modal'>
        <p>Incorrect.  The correct answer was: {decode(props.correctAnswer)}</p>
        {(props.lives <= 0 || props.answers === 30) ? 
          <Link to='/gameover'><button className='nes-btn' onClick={props.postScore}>Game Over</button></Link> :
          <button className='nes-btn' onClick={props.incrementQuestion}>Next Question</button>}
      </section>
    )
  }
}

export default AnswerModal