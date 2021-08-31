import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReduser'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createAnecdote(e.target.newAnecdote.value))
        dispatch(setMessage(`added new ${e.target.newAnecdote.value}`, 3))
        e.target.newAnecdote.value = ''
      }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <div><input name='newAnecdote'/></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm