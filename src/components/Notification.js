import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if(notification === null){
    return null
  }
  return (
    <div className='message'>
      {notification}
    </div>
  )
}

export default Notification