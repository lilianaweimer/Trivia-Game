import React from 'react'
import { connect } from 'react-redux'

const Lives = (props) => {
  console.log('this', props.lives)
  let lives = []
  // let hearts = lives.fill(<i className='nes-icon heart' />, 0, props.lives)
  let hearts = () => {
    for(var j = 0; j < props.lives; j++) {
      lives.push('')
    }
  }
  hearts()
  return (
    <p>{lives.map(heart => {
      return <i className='nes-icon heart' />
    })}</p>
  )
}

export default Lives