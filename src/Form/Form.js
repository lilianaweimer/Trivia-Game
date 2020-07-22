import React from  'react'
import './Form.css'
import { setPlayerName } from '../actions'

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
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, 'NAME', value, 'VALUE')
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setPlayerName(this.state.name)
  }

  renderInputs = () => {
    let inputs = []
    for(let i = 1; i < 7; i++) {
      inputs.push(
        <section className='round-label' key={i}>
          <h3>{`Round ${i}`}</h3>
          <select 
            name={`round${i}`}
            onChange={this.handleChange}
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
        <h1>Welcome to BlahBlah</h1>
        <label className='player-input'>
          Player:
          <input 
            type='text'
            name='name'
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <section className='categories'>
          {this.renderInputs()}
        </section>
        <input 
          className='play-btn'
          type='submit'
          value='Play!'
        />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPlayerName }, dispatch)
)

export default connect(null, mapDispatchToProps)(Form)