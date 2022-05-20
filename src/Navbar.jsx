import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

import './style.css'

function Navbar({title, links}) {
  const loc = useLocation();
  useEffect(() => {
    let str = loc.pathname;
    let currLoc = str.split("/")[1]

    document.title = currLoc === '' ? 'DEBSOC' : currLoc.charAt(0).toUpperCase() + currLoc.slice(1) + ' | DEBSOC'

    const but = document.querySelectorAll(`a[href = '${str}']`)
    const acLink = document.querySelectorAll('a')
    acLink.forEach(active => {
      active.classList.remove('bg-black-rgba')
    })
    but.forEach(buts => {
      if(!(buts.classList.contains('link'))){
        buts.classList.add('bg-black-rgba')
      }
    })
  })
  return (
    <div className="w-screen h-16 bg-white-rgba backdrop-blur-md z-[9999] fixed top-0 justify-center flex items-center">
      <div className="flex px-5 md:px-0 flex-1 lg:flex-[0.07_0_0%] font-extrabold text-white text-2xl box-border">
          <Link to= '/' className='link md:ml-5 lg:ml-0'>
            {title}
          </Link>
      </div>
      <div className="flex flex-1 lg:flex-[0.45_0_0%] font-semibold text-white text box-border">
        {links?.map(link => <Link to={`${link === 'Home' ? '/' : link.toLowerCase() }`} key = {link} className={`hidden md:block box-border px-4 py-2 mx-2 rounded-lg hover:bg-black-rgba transition duration-150 ease-out`}>{link}</Link>)}
      </div>
      <div className="hidden md:flex flex-1 lg:flex-[0.15_0_0%] items-center justify-end">
        <Link to= '/login' className='link'>
          <button className="rounded bg-white px-4 md:mr-5 lg:mr-0 font-medium text-xl py-1 text-magenta">Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar