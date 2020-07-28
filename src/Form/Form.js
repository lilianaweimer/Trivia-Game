import React from  'react'
import './Form.css'
import thunk from 'redux-thunk'

import { Link, withRouter } from 'react-router-dom'
import { setPlayerName, isLoading } from '../actions'
import { getQuestions } from '../thunks/getQuestions'
import { getTeachersPets } from '../thunks/getTeachersPets'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Form extends React.Component {
  constructor() {
    super()
    this.state={
      name: '',
      round1: '',
      round2: '',
      round3: '',
      round4: '',
      round5: '',
      round6: '',
      isDisabled: true
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(this.state.name && this.state.round1 && this.state.round2 && this.state.round3 && this.state.round4 && this.state.round5 && this.state.round6) {
      if(prevState.isDisabled === this.state.isDisabled) {
        this.setState({ isDisabled: false })
      }
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.name && this.state.round1 && this.state.round2 && this.state.round3 && this.state.round4 && this.state.round5 && this.state.round6) {
      this.props.setPlayerName(this.state.name)
      this.getAllQuestions()
      this.props.history.push('/play')
    } else {
      document.getElementById('input-msg').classList.add('input-msg-red')
    }
  }
    
  getAllQuestions = async () => {
    this.props.isLoading(true)
    await this.props.getQuestions(this.state.round1, 'easy')
    await this.props.getQuestions(this.state.round2, 'easy')
    await this.props.getQuestions(this.state.round3, 'medium')
    await this.props.getQuestions(this.state.round4, 'medium')
    await this.props.getQuestions(this.state.round5, 'hard')
    await this.props.getQuestions(this.state.round6, 'hard')
    this.props.isLoading(false)
  }
    
  renderInputs = () => {
    let inputs = []
    for(let i = 1; i < 7; i++) {
      inputs.push(
        <section className='round-label nes-select is-dark' key={i}>
          <h2>{`Round ${i}`}</h2>
          <select 
            name={`round${i}`}
            onChange={this.handleChange}
            data-testid={`round${i}`}
            aria-label={`Round ${i} subject dropdown menu`}
          >
            <option>Select a subject...</option>
            <option value='23'>History</option>
            <option value='22'>Geography</option>
            <option value='19'>Math</option>
            <option value='25'>Art</option>
            <option value='17'>Science & Nature</option>
            <option value='10'>Books</option>
          </select>
        </section>
      )
    }
    return inputs
  }

  render() {
    return (
      <form 
        className='start-game-form'
        onSubmit={this.handleSubmit}
      >
        <h1>Welcome to Chalkboard Trivia!</h1>
        <p id='input-msg'>Fill out all fields below to play!</p>
        <label className='player-input'>
          Player:
          <input 
            className='nes-input is-dark'
            type='text'
            name='name'
            placeholder='Name'
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <section className='categories'>
          {this.renderInputs()}
        </section>
        {/* {this.renderSubmit()} */}
        <input 
          className={this.state.isDisabled ? 'play-btn nes-btn is-disabled' : 'play-btn nes-btn'}
          // className='play-btn nes-btn'
          type='submit'
          value='Play!'
        />
        <Link to='/nerdz'><button className='teachers-pets nes-btn' onClick={this.props.getTeachersPets}>Teachers Pets</button></Link>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPlayerName, getQuestions, isLoading, getTeachersPets }, dispatch)
)

export default connect(null, mapDispatchToProps)(withRouter(Form))