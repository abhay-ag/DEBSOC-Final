import React from 'react'
import Card from './Card'
import './style.css'
import ChatIcon from '@mui/icons-material/Chat';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <div className="w-screen h-fit md:h-[35rem] flex flex-col justify-center items-center rad-grad pb-32 md:pb-0">
      <h1 className='text-[10vw] md:text-7xl text-white font-bold underline underline-offset-8 decoration-magenta'>Join DEBSOC</h1>
      <h3 className='text-normal md:text-2xl w-[90%] md:w-1/2 text-white font-medium mt-8 text-center'>Kickstart your debating career with peer and project driven approach and get debating opportunities in top events and universities.</h3>
      <div className='flex flex-col md:flex-row justify-around w-[75%] mt-8 mb-5 md:mb-0 h-fit'>
        <Card 
          icon={<ChatIcon fontSize = 'large'/>}
          text  = "Daily Live Classes and Doubt Sessions with hands on projects"
        />
        <Card 
          icon={<MenuBookIcon fontSize='large' />}
          text = "Most Active learning environment, Learn with friends and be part of the most supportive community"
        />
        <Card 
          icon={<PeopleAltIcon fontSize='large' />}
          text = "Mentorship from Industry experts of top debating societies"
        />
      </div>
      <Link className='link' to= '/apply'><button className='bg-magenta px-4 py-2 rounded text-xl mt-8 mb-5 font-semibold text-white'>Apply Now</button></Link>
    </div>
  )
}

export default Section1