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
      "question": "Jaguar Cars was previously owned by which car manfacturer?",
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
      "question": "Jaguar Cars was previously owned by which car manfacturer?",
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

  
})