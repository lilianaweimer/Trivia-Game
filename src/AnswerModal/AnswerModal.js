import React from 'react';
import './AnswerModal.css';
import { Link } from 'react-router-dom';
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

const AnswerModal = (props) => {
  if (props.correct) {
    return(
      <section className='modal'>
        <p>Correct!</p>
        {(props.lives <= 0 || props.answers === 30) ? 
          <Link to='/gameover'><button className='nes-btn'>Game Over</button></Link> :
          <button className='nes-btn' onClick={props.incrementQuestion}>Next Question</button>}
      </section>
    )
  } else {
    return (
      <section className='modal'>
        <p>Incorrect.  The correct answer was: {entities.decode(props.correctAnswer)}</p>
        {(props.lives <= 0 || props.answers === 30) ? 
          <Link to='/gameover'><button className='nes-btn'>Game Over</button></Link> :
          <button className='nes-btn' onClick={props.incrementQuestion}>Next Question</button>}
      </section>
    )
  }
}

export default AnswerModal