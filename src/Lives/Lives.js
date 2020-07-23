import React from 'react'
import { connect } from 'react-redux'

const Lives = (props) => {
  return (
    <p>{props.lives}</p>
  )
}

export default Lives