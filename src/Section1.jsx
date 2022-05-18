import React from 'react'
import Card from './Card'
import './style.css'

function Section1() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center rad-grad">
      <h1 className='text-7xl text-white font-bold underline underline-offset-8 decoration-magenta'>Join DEBSOC</h1>
      <h3 className='text-2xl w-1/2 text-white font-medium mt-8 text-center'>Kickstart your debating career with peer and project driven approach and get debating opportunities in top events and universities.</h3>
      <div className='flex flex-row w-3/4'>
        <Card />
      </div>
    </div>
  )
}

export default Section1