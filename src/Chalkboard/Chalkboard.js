import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Question from '../Question/Question'
import Answers from '../Answers/Answers'
import AnswerModal from '../AnswerModal/AnswerModal'
import BuyLifeModal from '../BuyLifeModal/BuyLifeModal'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import 'nes.css/css/nes.min.css'
import { 
  incrementCurrentQuestion, 
  resetCurrentQuestion, 
  incrementCurrentRound, 
  incrementLives,
  decrementLives,
  incrementScore,
  decrementScore 
} from '../actions';
import './Chalkboard.css';


class Chalkboard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      question: {},
      isCorrect: null,
      gameOver: false,
      answerCount: 0,
      isBuyingLives: false
    }
  }

  componentDidMount() {
  if(this.props.questions.length) {
    this.setState({question: this.props.questions[this.props.currentRound][this.props.currentQuestion]})
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

  postScore = () => {
    const url = 'https://chalkboard-trivia.herokuapp.com/api/v1/scores'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name: this.props.playerName, score: this.props.score })
    })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  toggleBuyLifeModal = () => {
    this.setState({ isBuyingLives: !this.state.isBuyingLives })
  }

  buyLife = () => {
    this.props.incrementLives()
    this.props.decrementScore(300)
    this.toggleBuyLifeModal()
  }

  render() {
    if (this.props.questions.length === 0) {
      return (
        <Redirect to='/'/>
      )
    }
    const question = this.props.questions[this.props.currentRound][this.props.currentQuestion]
    return (
      <div className='Page'>
        <Header 
          toggleBuyLifeModal={this.toggleBuyLifeModal}
          question={this.state.question} 
          questionCounter={this.props.currentQuestion} 
          lives={this.props.lives}
          currentRound={this.props.currentRound}
          score={this.props.score}
        />
        <progress className='nes-progress is-pattern' value={this.state.answerCount} max='30'/>
          <section className='nes-container is-rounded chalkboard'>
            <Question question={question.question} />
            <Answers 
              question={question} 
              checkAnswer={this.checkAnswer}
            />
            {this.state.isCorrect !== null && 
              <AnswerModal 
                postScore={this.postScore}
                correct={this.state.isCorrect}
                correctAnswer={question.correct_answer}
                incrementQuestion={this.incrementQuestion}
                resetCurrentQuestion={this.props.resetCurrentQuestion}
                lives={this.props.lives}
                answers={this.state.answerCount}
              />
            }
            {this.state.isBuyingLives &&
              <BuyLifeModal 
                buyLife={this.buyLife}
                toggleBuyLifeModal={this.toggleBuyLifeModal}
              />
            }
          </section>
      </div>
    )
  }
}

Chalkboard.propTypes = {
  playerName: PropTypes.string,
  questions: PropTypes.array,
  currentQuestion: PropTypes.number,
  currentRound: PropTypes.number,
  lives: PropTypes.number,
  score: PropTypes.number
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
      incrementLives,
      decrementLives,
      incrementScore,
      decrementScore 
    }, dispatch
  )
)

export default connect(mapStateToProps, mapDispatchToProps)(Chalkboard)