import { isLoading, hasErrored, setQuestions } from '../actions'

export const getQuestions = (questionCat, difficulty) => {
  const url = `https://opentdb.com/api.php?amount=5&category=${questionCat}&difficulty=${difficulty}&type=multiple`
  
  return async (dispatch) =>  {
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(setQuestions( data.results ))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}