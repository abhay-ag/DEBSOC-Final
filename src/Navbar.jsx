import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

function Navbar({title, links}) {
  return (
    <div className="w-screen h-16 md:h-20 bg-white-rgba backdrop-blur-md z-[9999] fixed top-0 justify-center flex items-center">
      <div className="flex px-5 md:px-0 flex-1 md:flex-[0.1_0_0%] font-bold text-white text-2xl box-border">
        <Link to='/'>
          {title}
        </Link>
      </div>
      <div className="flex flex-1 md:flex-[0.6_0_0%] font-medium text-white text-xl box-border">
        {links?.map(link => <Link to={`${link === 'Home' ? '/' : link }`} className='hidden md:block box-border px-4 py-2 mx-2 rounded-xl hover:bg-black-rgba transition duration-150 ease-out'>{link}</Link>)}
      </div>
    </div>
  )
}

export default Navbar