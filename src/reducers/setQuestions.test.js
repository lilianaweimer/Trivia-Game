import { setQuestions }from './setQuestions'
// import { combineReducers } from "redux"

describe('setQuestions', () => {
  it('Should return an initial state', () => {
    const expected = []
    const results = setQuestions(undefined, {})
    expect(results).toEqual(expected)
  })

  it('Should return a set of questions', () => {
    const expected =   [[
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
      "question": "Jaguar Cars was previously owned by which car manfacturer?",
      "correct_answer": "Ford",
      "incorrect_answers": [
      "Chrysler",
      "General Motors",
      "Fiat"
      ]
      }
    ]] 
<<<<<<< HEAD
=======

>>>>>>> master
    const results = setQuestions(undefined, {
      type: 'SET_QUESTIONS',
      questions: [
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
        "question": "Jaguar Cars was previously owned by which car manfacturer?",
        "correct_answer": "Ford",
        "incorrect_answers": [
        "Chrysler",
        "General Motors",
        "Fiat"
        ]
        }
      ]
    })
<<<<<<< HEAD
    expect(results).toEqual(expected)
  })
})











=======

    expect(results).toEqual(expected)
  })
})
>>>>>>> master
