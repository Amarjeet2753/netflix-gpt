import React from 'react'

import { logo } from '../utils/constant'

const Header = () => {
  return (
    <div className='px-8 py-2 bg-gradient-to-b from-black absolute z-10'>

        <img src={logo} alt="logo" className='w-44' />

    </div>
  )
}

export default Header