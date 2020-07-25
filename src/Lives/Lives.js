import React from 'react'
import { connect } from 'react-redux'

const Lives = (props) => {
  let lives = []
  for (var j = 0; j < props.lives; j++) {
      lives.push('')
  }
  return (
    <p>{lives.map(heart => {
      return <i className='nes-icon heart is-medium' />
    })}</p>
  )
}

export default Lives