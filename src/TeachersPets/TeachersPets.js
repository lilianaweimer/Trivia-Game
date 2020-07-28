import React from 'react';
import './TeachersPets.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { reset } from '../actions';

const TeachersPets = (props) => {
  if(props.teachersPets.length) {
    let pets = props.teachersPets.sort((a, b) => b.score - a.score).map(pet => {
      return <li key={pet.id}>{pet.name}: {pet.score}</li>
    })
    return (
      <section className='scoreboard nes-container is-rounded'>
        <h2 className='scoreboard-title'>Teacher's Pets:</h2>
        <ul className='scoreboard-list'>
          {pets}
        </ul>
        <Link to='/'><button className='nes-btn' onClick={props.reset}>Home</button></Link>
      </section>
    )
  } else {
    return (
      <section className='scoreboard nes-container is-rounded'>
        <h2>No high scores</h2>
        <Link to='/'><button className='nes-btn' onClick={props.reset}>Home</button></Link>
      </section>
    )
  }
}

TeachersPets.propTypes = {
  teacherPets: PropTypes.array,
  reset: PropTypes.func
}

const mapStateToProps = ({ setTeachersPets }) => ({
  teachersPets: setTeachersPets
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ reset }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TeachersPets);