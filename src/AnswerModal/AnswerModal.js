import React from 'react';
import './AnswerModal.css';
import { Link } from 'react-router-dom';

const AnswerModal = (props) => {
  if (props.correct) {
    return(
      <section className='modal'>
        <p>Correct!</p>
        {(props.lives <= 0 || props.answers === 5) ? 
          <Link to='/gameover'><button>Game Over</button></Link> :
          <button className='nes-btn' onClick={props.incrementQuestion}>Next Question</button>}
      </section>
    )
  } else {
    return (
      <section className='modal'>
        <p>Incorrect.  The correct answer was: {props.correctAnswer}</p>
        {(props.lives <= 0 || props.answers === 30) ? 
          <Link to='/gameover'><button>Game Over</button></Link> :
          <button className='nes-btn' onClick={props.incrementQuestion}>Next Question</button>}
      </section>
    )
  }
}

export default AnswerModal