import React from 'react'
import './style.css'
import HeroLogo from './imgs/hero.svg'
import Hero from './Hero'

function Main() {
  return (
    <div className="w-screen h-screen bg-bgb relative flex items-center justify-center">
      <img src={HeroLogo} alt = "Hero Gradient Banner" className='absolute w-full top-[-65px] z-[0]'/>
      <Hero />
    </div>
  )
}

export default Main