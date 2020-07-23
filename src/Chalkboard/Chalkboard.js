import React from 'react'
import { connect } from 'react-redux'

class Chalkboard extends React.Component {


  render() {
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
}

const mapStateToProps = ({ setPlayerName, setQuestions, setCurrentQuestion, setCurrentRound }) => ({
  playerName: setPlayerName,
  questions: setQuestions,
  currentQuestion: setCurrentQuestion,
  currentRound: setCurrentRound
})

export default connect(mapStateToProps)(Chalkboard)