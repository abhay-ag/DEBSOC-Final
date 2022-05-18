import React from 'react'

function Card({icon, text}) {
  return (
    <div className='w-full md:w-[30%] h-full flex flex-row items-center justify-center bg-gradient-to-br from-indigo-400 via-gray-700 to-gray-600 p-0.5 rounded mt-5 md:mt-0 box-border'>
        <div className='w-full box-border rounded p-5 flex font-bold text-white items-center justify-center flex-col h-full mycol'>
            <div className='text-magenta md:cuFon md:mt-4'>
                {icon}
            </div>
            <div className='text-center font-normal mt-5 md:mb-5'>
                {text}
            </div>
        </div>
    </div>
  )
}

export default Card