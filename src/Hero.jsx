import React from 'react'
import { Link } from 'react-router-dom'
import Plane from './imgs/Plane'

function Hero() {
  return (
    <div className='w-full md:w-2/3 flex flex-row md:h-fit absolute'>
        <div className="flex flex-1 lg:flex-[0.6_0_0%] h-screen md:h-[65vh] box-border pl-5 md:pl-0 flex-col justify-center">
            <h1 className="text-[8vw] md:text-[3rem] text-white font-bold"><font className = "underline underline-offset-8 decoration-magenta text-[17vw] md:text-[5rem]">DEBSOC<br/></font>The Debating Society <br /> @Chitkara University</h1>
            <div className="flex flex-row w-fit items-center mt-10">
                <font className="text-white font-black text-xl md:text-[1.7rem] mr-5">We're Hiring</font>
                <Link className='link' to= '/apply'><button className='bg-magenta px-4 py-2 rounded text-xl font-semibold text-white'>Apply Now</button></Link>
            </div>
            <font className="text-white text-[1.2rem] mt-5 font-medium">For more information click <font className = 'ml-3 text-magenta font-bold'><Link to= '/about-us' className = 'link'>here </Link></font></font>
        </div>
        <div className="hidden lg:flex flex-1 md:flex-[0.4_0_0%]">
            <Plane className = 'plane'/>
        </div>
    </div>
  )
}

export default Hero