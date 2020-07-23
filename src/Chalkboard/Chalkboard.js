import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Question from '../Question/Question'
import Answers from '../Answers/Answers'
import { setLives } from '../actions'

class Chalkboard extends React.Component {


  render() {
    const question = this.props.questions[this.props.currentRound][this.props.currentQuestion]
    return (
      <main className='App'>
        <div className='Page'>
          <Header question={question} questionCounter={this.props.currentQuestion} lives={this.props.lives}/>
          <section className='body'>
            <section className='chalkboard'>
            <Question question={question.question} />
            <Answers question={question} />
            </section>
          </section>
        </div>
      </main>
    )
  }
}

const mapStateToProps = ({ setPlayerName, setQuestions, setCurrentQuestion, setCurrentRound, setLives }) => ({
  playerName: setPlayerName,
  questions: setQuestions,
  currentQuestion: setCurrentQuestion,
  currentRound: setCurrentRound,
  lives: setLives
})

export default connect(mapStateToProps)(Chalkboard)