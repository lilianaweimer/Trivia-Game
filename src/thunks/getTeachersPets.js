import { isLoading, hasErrored, setTeachersPets } from '../actions'

export const getTeachersPets = () => {
  const url = 'http://localhost:3001/scores'

  return async (dispatch) => {
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(setTeachersPets(data.scores))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}