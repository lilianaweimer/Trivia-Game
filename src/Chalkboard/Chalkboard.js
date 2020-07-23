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
      question: this.props.questions[this.props.currentRound][this.props.currentQuestion],
      isCorrect: null
    }
  }
  
  checkAnswer = (e) => {
    console.log(e.target, 'CHECK ANSWER FN')
    if(e.target.id === this.state.question.correct_answer) {
      this.setState({isCorrect: true})
    } else {
      this.setState({isCorrect: false})
    }
  }
  
  incrementQuestion = () => {
    this.setState({ isCorrect: null})
    this.props.setCurrentQuestion()
  }


  render() {
    return (
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
            {this.state.isCorrect && 
              <AnswerModal 
                correct={true}
                correctAnswer={this.state.question.correct_answer}
              />}
            {this.state.isCorrect === false &&
              <AnswerModal 
                correct={false}
                correctAnswer={this.state.question.correct_answer}
              />
            }
          </section>
        </section>
      </div>
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