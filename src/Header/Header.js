import React from 'react'
import { connect } from 'react-redux'

const Header = () => {
  return (
    <header className='header'>
      <div className='question-number'>Question Number</div>
        <div className='category'>Category</div>
      <div className='lives'>Lives</div>
    </header>
  )
}

export default Header