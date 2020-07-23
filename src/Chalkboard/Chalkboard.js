import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Question from '../Question/Question'
import Answers from '../Answers/Answers'
import AnswerModal from '../AnswerModal/AnswerModal'
import { setLives } from '../actions'

class Chalkboard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      question: this.props.questions[this.props.currentRound][this.props.currentQuestion]
    }
  }
  
  checkAnswer = (e) => {
    if(e.target.id === this.state.question.correct_answer) {
      return (
        <AnswerModal 
          correct={true}
          correctAnswer={this.state.question.correct_answer}
        />
      )
    } else {
      return (
        <AnswerModal 
          correct={false}
          correctAnswer={this.state.question.correct_answer}
        />
      )
    }
  }

  render() {
    return (
      <main className='App'>
        <div className='Page'>
          <Header 
            question={this.state.question} 
            questionCounter={this.props.currentQuestion} 
            lives={this.props.lives}
          />
          <section className='body'>
            <section className='chalkboard'>
              <Question question={this.state.question.question} />
              <Answers 
                question={this.state.question} 
                checkAnswer={this.checkAnswer}
              />
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