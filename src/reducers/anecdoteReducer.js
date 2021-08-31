import dataService from "../services/anecdotes"

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  switch(action.type){   
    case 'VOTE':
      const voteToChange = state.find(f => f.id === action.id)
      const changedVote = { ...voteToChange, votes: action.votes }
      return state.map(ane => ane.id === action.id ? changedVote : ane).sort((a, b) => b.votes - a.votes)
    case 'ADD':
      return [...state, action.content]
    case 'INIT':
      return action.data
    default: 
      return state
  }
}

export const initAnecdotes = () => {
   return async dispatch => {
     const data = await dataService.getAnecdotes()
     dispatch({ type: 'INIT', data: data.sort((a,b) => b.votes - a.votes) })
   }
    
}

export const vote = (aneid) =>{
  return async dispatch => {
    const response = await dataService.addVote(aneid)
    dispatch({type: 'VOTE', id: aneid, votes: response.votes})
  }
   
}

export const createAnecdote =  (content) => {
  return async dispatch => {
    const newAnecdote = await dataService.addAnecdote({ content: content, votes: 0 })
    dispatch({ type: 'ADD', content: newAnecdote })
  }

}

export default anecdoteReducer