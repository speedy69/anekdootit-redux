import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAnecdotes = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addAnecdote = async data => {
    const response = await axios.post(baseUrl, data)
    return response.data
}

const addVote = async (id, vote) => {
    const updateData = await axios.get(`${baseUrl}/${id}`)
    updateData.data.votes = updateData.data.votes + 1
    const response = await axios.put(`${baseUrl}/${id}`, updateData.data )
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAnecdotes, addAnecdote, addVote }