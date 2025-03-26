import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'

import { options } from '../utils/constant'
import { fetchMovies } from '../redux/actions/movieActions'
import { useMovies } from '../hooks/useMovies'

const Browse = () => {
  
   const [page,setPage] = useState(1)

  const movies = useMovies(page,options)
  console.log(movies)

  const handleLoad=()=>{
    setPage((prev)=>prev+1)
  }
 

  return (
    <div className=''>
      <div className='absolute top-0 '>
      <Header/>
      </div>
        
      <div className='flex justify-center mt-80'>

      <h1>Browse page</h1>
      <button onClick={handleLoad} className='bg-green-500 '>load more</button>
      </div>
    </div>
  )
}

export default Browse