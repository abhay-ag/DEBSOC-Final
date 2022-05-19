import React from 'react'
import Border from './imgs/box-corner.svg'

function Maincard() {
  return (
    <div className='w-[30rem] h-[15rem] rounded flex flex-col justify-center items-center p-0.5 bg-gradient-to-br from-indigo-400 via-gray-700 to-gray-600 p-0.5'>
        <div className='w-full h-full mycol relative'>
            <img src={Border} alt="corner border" className='absolute right-[-0.3rem] opacity-40 top-[-0.3rem]'/>
        </div>
    </div>
  )
}

export default Maincard