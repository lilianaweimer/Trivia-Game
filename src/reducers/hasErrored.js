export const hasErrored = (state= false, action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return {state: true}
    default: 
      return state
  }
}