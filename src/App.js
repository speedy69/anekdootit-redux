import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/anecdoteList'
import Filter from './components/filter'
import Notification from './components/Notification'
import { initAnecdotes } from './reducers/anecdoteReducer'
//import { getAnecdotes } from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm  />
    </div>
  )
}

export default App