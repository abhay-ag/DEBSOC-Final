import React from 'react'
import './style.css'

function Navbar({title, links}) {
  return (
    <div className="w-screen h-16 md:h-20 bg-white-rgba backdrop-blur-sm z-[9999] fixed top-0 justify-center flex items-center">
      <div className="flex flex-1 md:flex-[0.2_0_0%] font-bold text-white text-3xl box-border">DEBSOC</div>
    </div>
  )
}

export default Navbar