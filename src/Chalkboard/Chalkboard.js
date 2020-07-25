import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Question from '../Question/Question'
import Answers from '../Answers/Answers'
import AnswerModal from '../AnswerModal/AnswerModal'
import GameOver from '../GameOver/GameOver'
import { bindActionCreators } from 'redux'
import 'nes.css/css/nes.min.css'
import { 
  incrementCurrentQuestion, 
  resetCurrentQuestion, 
  incrementCurrentRound, 
  decrementLives,
  incrementScore,
  decrementScore 
} from '../actions';
import { Redirect } from 'react-router-dom';
import './Chalkboard.css';

class Chalkboard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      question: this.props.questions[this.props.currentRound][this.props.currentQuestion],
      isCorrect: null,
      gameOver: false,
      answerCount: 0,
    }
  }
  
  checkAnswer = (e) => {
    this.setState((prevState) => {
      return { ...prevState, answerCount: prevState.answerCount + 1 }
    })
    if(e.target.id === this.state.question.correct_answer) {
      this.setState({isCorrect: true})
      this.addPoints()
    } else {
      this.setState({isCorrect: false})
      this.removePoints()
      this.props.decrementLives()
    }
  }

  addPoints = () => {
    this.state.question.difficulty === 'easy' && this.props.incrementScore(50)
    this.state.question.difficulty === 'medium' && this.props.incrementScore(100)
    this.state.question.difficulty === 'hard' && this.props.incrementScore(150)
  }

  removePoints = () => {
    this.state.question.difficulty === 'easy' && this.props.decrementScore(25)
    this.state.question.difficulty === 'medium' && this.props.decrementScore(50)
    this.state.question.difficulty === 'hard' && this.props.decrementScore(75)
  }
  
  incrementQuestion = async () => {
    if (this.props.currentQuestion < 4) {
      await this.props.incrementCurrentQuestion()
    } else {
      await this.props.resetCurrentQuestion()
      await this.props.incrementCurrentRound()
    }
    this.setState({ 
      question: this.props.questions[this.props.currentRound][this.props.currentQuestion],
      isCorrect: null
    })
  }

  render() {
    return (
      <div className='nes-container is-rounded Page'>
        <Header 
          question={this.state.question} 
          questionCounter={this.props.currentQuestion} 
          lives={this.props.lives}
          currentRound={this.props.currentRound}
          score={this.props.score}
        />
        {/* <section className='nes-container is-rounded body'> */}
          <section className='nes-container is-rounded chalkboard'>
            <Question question={this.state.question.question} />
            <Answers 
              question={this.state.question} 
              checkAnswer={this.checkAnswer}
            />
            {this.state.isCorrect && 
              <AnswerModal 
                correct={true}
                correctAnswer={this.state.question.correct_answer}
                incrementQuestion={this.incrementQuestion}
                resetCurrentQuestion={this.props.resetCurrentQuestion}
                lives={this.props.lives}
                answers={this.state.answerCount}
              />
            }
            {this.state.isCorrect === false &&
              <AnswerModal 
                correct={false}
                correctAnswer={this.state.question.correct_answer}
                incrementQuestion={this.incrementQuestion}
                resetCurrentQuestion={this.props.resetCurrentQuestion}
                lives={this.props.lives}
                answers={this.state.answerCount}
              />
            }
          </section>
        {/* </section> */}
      </div>
    )
  }
}

const mapStateToProps = ({ setPlayerName, setQuestions, setCurrentQuestion, setCurrentRound, setLives, setScore }) => ({
  playerName: setPlayerName,
  questions: setQuestions,
  currentQuestion: setCurrentQuestion,
  currentRound: setCurrentRound,
  lives: setLives,
  score: setScore
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    { 
      incrementCurrentQuestion, 
      resetCurrentQuestion, 
      incrementCurrentRound,
      decrementLives,
      incrementScore,
      decrementScore 
    }, dispatch
  )
)

export default connect(mapStateToProps, mapDispatchToProps)(Chalkboard)