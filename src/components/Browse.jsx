import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'

const Browse = () => {
  
  const authUser = useSelector(state=>state.auth) 
  console.log(authUser)

  return (
    <div>

      <Header/>
      <h1>Browse page</h1>
    </div>
  )
}

export default Browse