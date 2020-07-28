import { setTeachersPets } from './setTeachersPets'

describe('setTeachersPets', () => {

  it('Should return an initial state', () => {
    const expected = []
    const results = setTeachersPets(undefined, {})
    expect(results).toEqual(expected)
  })

  it('Should return a list of scores', () => {
    const expected = [
      {id: 1, initials: 'ABC', score: 69}, 
      {id: 1, initials: 'DEF', score: 10}
    ]
    const results = setTeachersPets(undefined, {
      type: 'SET_TEACHERS_PETS',
      teachersPets: [
        {id: 1, initials: 'ABC', score: 69}, 
        {id: 1, initials: 'DEF', score: 10}
      ]
    })
    expect(results).toEqual(expected)
  })
})











