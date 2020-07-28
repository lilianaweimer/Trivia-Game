import * as actions from './index';


describe('actions', () => {
  it('Should set all the questions', () => {
    const questions = [[
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the capital of Indonesia?",
        "correct_answer": "Jakarta",
        "incorrect_answers": [
          "Bandung",
          "Medan",
          "Palembang"
        ]
      },
      {
        "category": "Vehicles",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Jaguar Cars was previously owned by which car company?",
        "correct_answer": "Ford",
        "incorrect_answers": [
          "Chrysler",
          "General Motors",
          "Fiat"
        ]
      }
    ]]

    const expectedAction =  {
      type: "SET_QUESTIONS",
      questions: [[
        {
          "category": "Geography",
          "type": "multiple",
          "difficulty": "easy",
          "question": "What is the capital of Indonesia?",
          "correct_answer": "Jakarta",
          "incorrect_answers": [
            "Bandung",
            "Medan",
            "Palembang"
          ]
        },
        {
          "category": "Vehicles",
          "type": "multiple",
          "difficulty": "easy",
          "question": "Jaguar Cars was previously owned by which car company?",
          "correct_answer": "Ford",
          "incorrect_answers": [
            "Chrysler",
            "General Motors",
            "Fiat"
          ]
        }
      ]],
    
    }
    const result = actions.setQuestions(questions)

    expect(result).toEqual(expectedAction)
  })

  it('Should be able to set the teachers pets', () => {
    const teachersPets = [
      {
        id: 3,
        initials: 'WJW',
        score: 420000
      },
      {
        id: 17,
        initials: 'TDA'
      }
    ]

    const expectedAction = {
      type: 'SET_TEACHERS_PETS',
      teachersPets: [
        {
          id: 3,
          initials: 'WJW',
          score: 420000
        },
        {
          id: 17,
          initials: 'TDA'
        }
      ]
    }

    const result = actions.setTeachersPets(teachersPets)

    expect(result).toEqual(expectedAction)
  })

  it('Should increment the current round', () => {

    const expectedAction = {
      type: 'INCREMENT_CURRENT_ROUND',
    }

    const result = actions.incrementCurrentRound()

    expect(result).toEqual(expectedAction)
  })

  it('Should increment the current question', () => {

    const expectedAction = {
      type: 'INCREMENT_CURRENT_QUESTION',
    }

    const result = actions.incrementCurrentQuestion()

    expect(result).toEqual(expectedAction)
  })


  it('Should reset the current question', () => {

    const expectedAction = {
      type: 'RESET_CURRENT_QUESTION',
    }

    const result = actions.resetCurrentQuestion()

    expect(result).toEqual(expectedAction)
  })


  it('Should increment the current score', () => {
    const score = 50
    const expectedAction = {
      type: 'INCREMENT_SCORE',
      score: 50
    }

    const result = actions.incrementScore(score)

    expect(result).toEqual(expectedAction)
  })

  it('Should decrement the current score', () => {
    const score = (-50)
    const expectedAction = {
      type: 'DECREMENT_SCORE',
      score: -50
    }

    const result = actions.decrementScore(score)

    expect(result).toEqual(expectedAction)
  })

  it('Should increment the lives', () => {

    const expectedAction = {
      type: 'INCREMENT_LIVES',
    }

    const result = actions.incrementLives()

    expect(result).toEqual(expectedAction)
  })

  it('Should decrement the lives', () => {

    const expectedAction = {
      type: 'DECREMENT_LIVES',
    }

    const result = actions.decrementLives()

    expect(result).toEqual(expectedAction)
  })

  it('Should set the player name', () => {
    const playerName = 'Bill'

    const expectedAction = {
      type: 'SET_PLAYER_NAME',
      playerName: 'Bill'
    }

    const result = actions.setPlayerName(playerName)

    expect(result).toEqual(expectedAction)
  })

  it('Should set isLoading', () => {
    const bool = true;

    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = actions.isLoading(bool)

    expect(result).toEqual(expectedAction)
  })


  it('Should set hasErrored', () => {
    const msg = 'Youve Errored!';

    const expectedAction = {
      type: 'HAS_ERRORED',
      message: 'Youve Errored!'
    }

    const result = actions.hasErrored(msg)

    expect(result).toEqual(expectedAction)
  })

  it('Should reset the game', () => {
    const expectedAction = {
      type: 'RESET'
    }
    
    const result = actions.reset()

    expect(result).toEqual(expectedAction)
  })
})
