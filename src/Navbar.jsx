import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './style.css'

function Navbar({title, links}) {
  return (
    <nav className="w-full text-white shadow backdrop-filter backdrop-blur bg-gray-700 bg-opacity-40 sticky top-0 w-full px-5 z-50 md:bg-opacity-10">
      <div className='flex justify-between items-center px-4 h-16'>
        <div className="flex justify-center items-center">
          <Link className="font-black text-xl box-border flex-shrink-0 patented-logo" to="/">{title}</Link>
          <div className="ml-10 font-medium text-base box-border hidden md:flex">
            {links?.map(link => <Link to={`/${link}`} className='hidden md:block box-border px-4 py-2 mx-1 rounded-md hover:bg-black-rgba transition duration-150 ease-out'>{link}</Link>)}
          </div>
        </div>
        <div className='hidden md:block'>
          <Link className="py-3 px-5 font-medium text-lg text-indigo-500 rounded-md bg-white" to="/login">Sign in</Link>
        </div>
        <div className='block md:hidden'>
          <button className="bg-gray-800 bg-opacity-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-opacity-60 focus:outline-none">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <div className='py-4 px-4 hidden'>
        <div className='flex flex-col space-y-2'>
        {links?.map(link => <Link to={`/${link}`} className='flex items-center text-gray-300 hover:bg-zinc-700 hover:bg-opacity-90 hover:text-white px-3 py-2 rounded-md text-base font-medium bg-opacity-60 text-white'>{link}</Link>)}
        </div>
        {/* <div className=''>
          <Link className="py-3 px-5 font-medium text-lg text-indigo-500 rounded-md bg-white" to="/login">Sign in</Link>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar