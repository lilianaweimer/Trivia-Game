import React from 'react'
import { connect } from 'react-redux'

function Chalkboard() {
  return (
    <main className='App'>
      <div className='Page'>
        <header className='header'>
          <div className='question-number'>Question Number</div>
          <div className='category'>Category</div>
          <div className='lives'>Lives</div>
        </header>
        <section className='body'>
          <div className='chalkboard'>Chalkboard</div>
        </section>
      </div>
    </main>
  )
}

const mapStateToProps = ({ setPlayerName, setQuestions }) => ({
  playerName: setPlayerName,
  questions: setQuestions
})

export default connect(mapStateToProps)(Chalkboard)