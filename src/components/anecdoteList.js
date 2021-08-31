import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { setMessage } from "../reducers/notificationReduser"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes.filter(f => f.content.includes(state.filter)))

  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(vote(Number(e.target.value)))
    dispatch(setMessage(`you voted ${e.target.name}`, 3))
  }

  return(
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} 
            <button className='vote' value={anecdote.id} name={anecdote.content} onClick={handleClick}>vote</button>
          </div>
          </div>
      )}
    </>
  )
}

export default AnecdoteList