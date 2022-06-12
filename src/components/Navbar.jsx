import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../style.css'

function Navbar({title, links}) {
  const [toggleNavMenu, setToggleNavMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentLocation = location.pathname;
    const currentPage = currentLocation.split("/")[1];

    // Document Title
    document.title = currentPage === '' ? 'DEBSOC' : currentPage.charAt(0).toUpperCase() + currentPage.slice(1) + ' | DEBSOC';

    document.querySelectorAll("a:not(.patented-link):not(.login-link):not(.footer-nav-link)").forEach(el => el.classList.remove('target-link'));

    document.querySelectorAll(`a[href="/${currentPage}"]:not(.login-link):not(.patented-logo):not(.footer-nav-link)`).forEach(el => el.classList.add("target-link"));

    if (currentPage === "authentication") document.querySelector(".App").classList.add("auth-page-background");
    else document.querySelector(".App").classList.remove("auth-page-background");

    if  (currentPage === "") document.querySelector(".App").classList.add("main-page-background");
    else document.querySelector(".App").classList.remove("main-page-background");

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  }, [location, toggleNavMenu]);

  const resetNavMenuState = (e) => {
    setToggleNavMenu(false);
  };

  return (
    <nav className="w-full text-white shadow backdrop-filter backdrop-blur bg-zinc-900 bg-opacity-40 sticky top-0 w-full px-5 z-50 md:bg-opacity-10">
      <div className='flex justify-between items-center px-4 h-20 mx-auto'>
        <div className="flex justify-center items-center">
          <Link className="font-black text-xl box-border flex-shrink-0 patented-logo" to="/" onClick={() => toggleNavMenu(false)}>{title}</Link>
          <div className="ml-10 font-medium text-lg box-border hidden md:flex">
            {links?.map(link => <Link key={`link-${link.name}`} to={`/${link.to}`} className='hidden md:block box-border px-4 py-2 mx-2 rounded-md hover:bg-black-rgba transition duration-150 ease-out' onClick={resetNavMenuState}>{link.name}</Link>)}
          </div>
        </div>
        <div className='hidden md:block'>
          <Link className="py-2 px-5 font-medium text-lg text-violet-600 rounded-md bg-white login-link" to="/authentication">Sign in</Link>
        </div>
        <div className='block md:hidden'>
          <button onClick={() => setToggleNavMenu(!toggleNavMenu)} className="bg-zinc-800 bg-opacity-50 inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-opacity-60 focus:outline-none">
            {toggleNavMenu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="block h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="block h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>}
          </button>
        </div>
      </div>
      {toggleNavMenu && <div className="p-4 md:hidden">
        <div className='flex flex-col space-y-2'>
        {links?.map(link => <Link key={`link-${link.name}`} to={`/${link.to}`} className='flex items-center text-gray-300 hover:bg-zinc-700/90 hover:text-white px-4 py-2 rounded-md text-lg font-semibold bg-opacity-60 text-white' onClick={resetNavMenuState}>{link.name}</Link>)}
        </div>
        <div className='flex py-4 mt-6 mx-4 border-t border-zinc-700'>
          <Link className="flex-1 text-center py-3 px-5 font-medium text-lg text-white rounded-md bg-transparent border login-link" to="/authentication" onClick={resetNavMenuState}>Sign in</Link>
        </div>
      </div>}
    </nav>
  )
}

export default Navbar