import React from 'react'
import './style.css'
import HeroLogo from './imgs/hero.svg'

function Main() {
  return (
    <div className="w-screen h-screen bg-bgb relative">
      <img src={HeroLogo} alt = "Hero Gradient Banner" className='absolute w-full top-[-50px] z-[0]'/>
    </div>
  )
}

export default Main