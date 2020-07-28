import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

const Lives = (props) => {
  if (props.lives >= 0) {
  let lives = []
  for (var j = 0; j < props.lives; j++) {
      lives.push('')
  }
  return (
    <p>{lives.map(heart => {
      return <i className='nes-icon heart is-medium' data-testid='heart'/>
    })}</p>
  )} else {
    return (
      <p> Error: No Lives Were Given</p>
    )
  }
}

Lives.propTypes = {
  lives: PropTypes.number
}

export default Lives