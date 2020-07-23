import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Question from '../Question/Question'

class Chalkboard extends React.Component {


  render() {
    return (
      <main className='App'>
        <div className='Page'>
          <Header/>
          <section className='body'>
            <section className='chalkboard'>
             <Question question={this.props.questions[this.props.currentRound][this.props.currentQuestion].question}/>
            </section>
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