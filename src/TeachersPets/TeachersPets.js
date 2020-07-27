import React from 'react';
import './TeachersPets.css';
import { Link } from 'react-router-dom'

const TeachersPets = () => {
  return (
    <section className='scoreboard'>
      <h2 className='scoreboard-title'>Teacher's Pets:</h2>
      <ul className='scoreboard-list'>
          <li>Name: Score</li>
          <li>Name: Score</li>
          <li>Name: Score</li>
      </ul>
      <Link to='/'><button className='nes-btn'>Home</button></Link>
    </section>
  )
}

export default TeachersPets;