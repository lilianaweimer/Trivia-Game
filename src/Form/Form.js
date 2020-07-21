import React from  'react'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state={

    }
  }

  renderInputs = () => {
    return (
      <select>
          <option>
            History
          </option>
          <option>
            Geography
          </option>
          <option>
            Math
          </option>
          <option>
            Art
          </option>
          <option>
            Science & Nature
          </option>
          <option>
            Books
          </option>
        </select>
    )
  }

  render() {
    return (
      <form className='start-game-form'>
        <label>
          Player:
          <input 
            type='text'
          />
        </label>
        <section className='categories'>
          <label>
            Round 1: 
            {this.renderInputs()}
          </label>
          <label>
            Round 2: 
            {this.renderInputs()}
          </label>
          <label>
            Round 3: 
            {this.renderInputs()}
          </label>
          <label>
            Round 4: 
            {this.renderInputs()}
          </label>
          <label>
            Round 5: 
            {this.renderInputs()}
          </label>
          <label>
            Round 6: 
            {this.renderInputs()}
          </label>
        </section>
      </form>
    )
  }
}

export default Form