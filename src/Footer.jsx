import { FacebookRounded, GitHub, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='w-screen h-fit box-border py-5 mt-12 bg-[rgb(38,38,41)] flex flex-col items-center justify-center'>
      <div className="flex flex-row flex-wrap box-border w-3/4 items-center justify-center my-2">
        <Link className='link font text-white text-xl box-border mx-5 my-2' to={'/about-us'}>About</Link>
        <Link className='link font text-white text-xl box-border mx-5 my-2' to={'/contact'}>Contact Us</Link>
      </div>
      <div className='flex flex-row flex-wrap w-1/2 items-center justify-center my-5 '>
          <FacebookRounded className='mx-2 text-[rgb(180,180,180)] hover:text-white' />
          <GitHub className='mx-2 text-[rgb(180,180,180)] hover:text-white'/>
          <Instagram className='mx-2 text-[rgb(180,180,180)] hover:text-white'/>
          <Twitter className='mx-2 text-[rgb(180,180,180)] hover:text-white'/>
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center my-2 text-[rgb(180,180,180)]'>
        &copy; {year} DEBSOC. All right reserved.
      </div>
    </div>
  )
}

export default Footer