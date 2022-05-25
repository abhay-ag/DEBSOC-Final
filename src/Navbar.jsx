import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {faBars} from "@fortawesome/free-solid-svg-icons";


import './style.css'

function Navbar({title, links}) {
  const resetNavMenuState = (e) => {
    setToggleNavMenu(false);
  };
  const loc = useLocation();
  const [toggleNavMenu, setToggleNavMenu] = useState(false);
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
  }, [loc, toggleNavMenu])
  return (
    <div className="nav w-screen bg-white-rgba backdrop-blur-md z-[9999] fixed top-0 justify-center flex flex-col md:flex-row md:items-center py-5">
      <div className="flex px-5 md:px-0 flex-1 items-center lg:flex-[0.07_0_0%] font-extrabold text-white text-2xl box-border">
          <Link to= '/' className='link md:ml-5 lg:ml-0'>
            {title}
          </Link>
      </div>
      <div className="hidden md:flex flex-1 lg:flex-[0.45_0_0%] font-semibold text-white text box-border">
        {links?.map(link => <Link to={`${link === 'Home' ? '/' : link.toLowerCase() }`} key = {link} className={` box-border px-4 py-2 mx-2 rounded-lg hover:bg-black-rgba transition duration-150 ease-out`}>{link}</Link>)}
      </div>
      <div className="hidden md:flex flex-1 lg:flex-[0.15_0_0%] items-center justify-end">
        <Link to= '/login' className='link'>
          <button className="rounded bg-white px-4 md:mr-5 lg:mr-0 font-medium text-xl py-1 text-magenta">Sign In</button>
        </Link>
      </div>
      <button onClick={() => setToggleNavMenu(!toggleNavMenu)} className='block md:hidden absolute right-5 top-3 text-white text-2xl rounded bg-[rgba(255,255,255,0.1)] box-border py-2 px-3'>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {toggleNavMenu && <div className="mt-10 md:hidden text-white font-medium">
        <div className='flex flex-col space-y-2'>
        {links?.map(link => <Link to={`${link === 'Home' ? '/' : link.toLowerCase() }`} key = {link} className={` box-border px-4 py-2 mx-2 rounded-lg hover:bg-black-rgba transition duration-150 ease-out`}>{link}</Link>)}
        </div>
        <div className='flex py-4 mt-6 mx-4 border-t border-zinc-700'>
          <Link className="flex-1 text-center py-3 px-5 font-medium text-lg text-white rounded-md bg-transparent border login-link" to="/login" onClick={resetNavMenuState}>Sign in</Link>
        </div>
      </div>}
    </div>
  )
}

export default Navbar