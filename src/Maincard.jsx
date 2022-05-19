import React from 'react'
import Border from './imgs/box-corner.svg'
import CompSVG from './imgs/Computer'

function Maincard({icon, heading, desc}) {
  return (
    <div className='w-[27rem] h-[18rem] rounded flex flex-col justify-center items-center bg-gradient-to-br from-indigo-400 via-gray-700 to-gray-600 p-0.5'>
        <div className='w-full h-full mycol relative flex flex-col justify-center box-border p-5'>
            <img src={Border} alt="corner border" className='absolute right-[-0.3rem] opacity-30 top-[-0.3rem] z-0'/>
            <div className='rounded-xl bg-[rgba(255,255,255,0.08)] w-16 h-16 flex items-center justify-center'>
                {icon}
            </div>
            <h1 className='text-2xl font-medium text-white mt-4'>{heading}</h1>
            <h2 className='text-normal text-[rgb(150,150,153)] text-justify mt-4'>{desc}</h2>
        </div>
    </div>
  )
}

export default Maincard