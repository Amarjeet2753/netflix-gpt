import React from 'react'
import Header from './Header'
import LoginSingup from './LoginSingup'

import ForgotPassword from './ForgotPassword'
import { Outlet } from 'react-router-dom'
import { bg_img } from '../utils/constant'

const Body = () => {
  return (
    <div>
        <Header/>
        {/* <LoginSingup/> */}
        
        <div className='relative'>

          <img src={bg_img} className=" object-cover object-center" />
        
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
        <Outlet/>
        </div>
    </div>
  )
}

export default Body