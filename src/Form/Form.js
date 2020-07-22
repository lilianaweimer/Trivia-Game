import React from  'react'
import './Form.css'

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
  
  updateValue = (e) => {
    return e.target.value
  }

  renderInputs = () => {
    let inputs = []
    for(let i = 1; i < 7; i++) {
      inputs.push(
        <section className='round-label'>
        <h3>{`Round ${i}`}</h3>
        <select 
          name={`round${i}`}
          value={`this.state.round${i}`}
          onChange={(e) => this.handleChange(e)}
        >
          <option value='history'>History</option>
          <option value='geography'>Geography</option>
          <option value='math'>Math</option>
          <option value='art'>Art</option>
          <option value='science & nature'>Science & Nature</option>
          <option value='books'>Books</option>
        </select>
        </section>
      )
    }
    return inputs
  }

  render() {
    return (
      <form className='start-game-form'>
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
        {/* <section className='categories'>
          <label 
            className='round-label' 
            // name='round1'
            // value={this.state.round1}
            // onChange={(e) => this.handleChange(e)}
          >
            Round 1: 
            {this.renderInputs()}
          </label>
          <label 
            className='round-label' 
            name='round2'
            value={this.state.round2}
            onChange={(e) => this.handleChange(e)}
          >
            Round 2: 
            {this.renderInputs()}
          </label>
          <label 
            className='round-label' 
            name='round3'
            value={this.state.round3}
            onChange={(e) => this.handleChange(e)}
          >
            Round 3: 
            {this.renderInputs()}
          </label>
          <label 
            className='round-label' 
            name='round4'
            value={this.state.round4}
            onChange={(e) => this.handleChange(e)}
          >
            Round 4: 
            {this.renderInputs()}
          </label>
          <label 
            className='round-label' 
            name='round5'
            value={this.state.round5}
            onChange={(e) => this.handleChange(e)}
          >
            Round 5: 
            {this.renderInputs()}
          </label>
          <label 
            className='round-label' 
            name='round6'
            value={this.state.round6}
            onChange={(e) => this.handleChange(e)}
          >
            Round 6: 
            {this.renderInputs()}
          </label>
        </section>
        <input 
          className='play-btn'
          type='submit'
          value='Play!'
        /> */}
      </form>
    )
  }
}

export default Form