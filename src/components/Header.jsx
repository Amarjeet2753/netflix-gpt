import React from 'react'

import { logo } from '../utils/constant'
import { useDispatch, useSelector} from 'react-redux'
import { signOutUser } from '../redux/actions/authAction'
import { useNavigate } from 'react-router-dom'

const Header = () => {
   
  const {user }= useSelector(state=>state.auth)
  const dispatch =useDispatch()
  const navigate = useNavigate()
  
  const handleLogout = ()=>{
     dispatch(signOutUser())
     navigate('/')
  }


  return (
   
    
    <div className='w-full px-8 py-2 bg-gradient-to-b from-black absolute z-10 flex justify-between'>

        <img src={logo} alt="logo" className='w-44' />

        {user && <button className='text-white' onClick={handleLogout}>Logout</button>}

    </div>
  )
}

export default Header