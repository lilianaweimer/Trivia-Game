import React from 'react';
import './TeachersPets.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const TeachersPets = (props) => {
  // if(props.teachersPets.length) {
    return (
      <section className='scoreboard'>
        <h2 className='scoreboard-title'>Teacher's Pets:</h2>
        <ul className='scoreboard-list'>
            {/* <li>{props.teachersPets[0].initials}: {props.teachersPets[0].score}</li>
            <li>{props.teachersPets[1].initials}: {props.teachersPets[1].score}</li>
            <li>{props.teachersPets[2].initials}: {props.teachersPets[2].score}</li> */}
        </ul>
        <Link to='/'><button className='nes-btn'>Home</button></Link>
      </section>
    )
  // } else {
  //   return (
  //     <section className='scoreboard'>
  //       <h2>No high scores</h2>
  //       <Link to='/'><button className='nes-btn'>Home</button></Link>
  //     </section>
  //   )
  // }
}

const mapStateToProps = ({ setTeachersPets }) => ({
  teachersPets: setTeachersPets
})

export default connect(mapStateToProps)(TeachersPets);