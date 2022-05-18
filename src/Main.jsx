import React from 'react'
import './style.css'

function Main() {
  const LOGO = ["The", "Debating", "Society"];

  return (
    <div className="w-full flex-1 mx-auto overflow-x-hidden">
      <img className='w-full opacity-90 absolute top-0 z-[1]' src="	https://devsnest.in/_next/static/media/gradient-banner.b90a7578.svg" alt="Gradient Image" />
      <div className='text-white z-[2] flex mx-10 my-4 md:my-10 md:justify-between'>
        <div className='z-[2] flex-1'>
          {
            LOGO.map((word, i) => (
              <div key={`word-${word}`} className='flex justify-center md:justify-start my-3 z[2]'>
                {word.split("").map((letter, j) => (
                  <div key={`letter-${letter}`} className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wide font-semibold z-[2]'>{letter}</div>
                ))}
              </div>
            ))
          }
        </div>
        <div className='z-[2] hidden md:block'>
          // Logo
        </div>
      </div>
    </div>
  )
}

export default Main