import React from 'react'
import Card from './Card'
import './style.css'
import ChatIcon from '@mui/icons-material/Chat';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';
import Maincard from './Maincard'
import Computer from './imgs/Computer'
import ReactIco from './imgs/React'
import Idea from './imgs/Idea'
import Speaker from './imgs/Speaker'
import Group from './imgs/Group'
import Geometry from './imgs/Geometry'
import img from './imgs/logos.png'
import Achievement from './Achievement';

function Section1() {
  const data = [
    {
      icon: <Computer />,
      title: "Live Classes Everyday",
      desc: "It’s COVID, we know you can't even meet your next door neighbors. But we do bring a fun class-like experience virtually."
    },
    {
      icon: <ReactIco />,
      title: "Personalized Guidance",
      desc: "Everyone is different and so are your talents and problems. We nurture you through personalized attention into the best you."
    },
    {
      icon: <Idea />,
      title: "Project Driven Curriculum",
      desc: "Reading the whole Curriculum is a nightmare, only Sheldon can handle so much of theory. Our 10+ hands-on projects, makes it exciting."
    },
    {
      icon: <Speaker />,
      title: "Guest Talks",
      desc: "Our “Cool Guest Talks” by debating experts on trending topics keep you upgraded to the latest version."
    },
    {
      icon: <Group />,
      title: "Peer Learning",
      desc: "Discussions and debates are the best way to learn, We encourage group collaboration and pair programming."
    },
    {
      icon: <Geometry />,
      title: "Interview Preparation",
      desc: `We end your stage fear of interviews, by having mock "live like" interviews by mentors from FAANG type companies.`
    }
]
  const dataAchieve = [
    {
      name: "Harsh Vardhan Sikka",
      ac: ["Finalist: INBLOOM Christ University", "It's all Debatable by ASME", "Word Wars by Mechstein"]
    },{
      name: "Ayush Saini",
      ac: ["Finalist: NSMCD'22 at NSUT Delhi"]
    },{
      name: "Rohan Kapoor",
      ac: ["MUN Special Mention"]
    },{
      name: "Aseem Chadha",
      ac: ["UIET MUN'21", "Bebaak 2nd position", "IMS Noida"]
    }
  ]
  return (
    <div className="w-screen h-fit flex flex-col justify-center items-center rad-grad mb-5">
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
      <Link className='link' to= '/apply'><button className='bg-magenta px-4 py-2 rounded text-xl mt-8 mb-16 font-semibold text-white'>Apply Now</button></Link>
      <div className='w-full h-fit flex flex-col justify-center items-center box-border'>
        <h1 className='font-bold text-[8vw] md:text-7xl text-white'>
          Under our <font className = 'text-magenta'>Guidance</font>
        </h1>
        <h3 className='font-medium text-white text-[4vw] md:text-3xl md:mt-4'>our students have debated in</h3>
        <img src={img} alt="logos" className='w-full md:w-3/4 lg:w-1/2'/>
      </div>
      <div className='w-screen h-fit box-border flex flex-col items-center justify-center'>
        <h1 className='text-[8vw] md:text-6xl font-bold text-white'>On a mission</h1>
        <h1 className='text-[8vw] md:text-6xl font-bold text-magenta'>to empower students</h1>
        <div className='flex flex-col md:flex-row flex-wrap w-3/4 h-fit lg:h-[60vh] justify-around h-fit box-border my-24'>
          {
            dataAchieve.map(ob => (
              <Achievement key={ob.name} name={ob.name} data = {ob.ac}/>
            ))
          }
        </div>
      </div>
      <div className='w-full h-fit flex flex-col justify-center items-center'>
        <h1 className='text-[8vw] md:text-7xl font-bold text-white text-center'>
            What makes us<font className = 'text-magenta'> Unique!</font>
        </h1>
        <div className='w-[90%] h-fit flex flex-col md:flex-row flex-wrap items-center justify-center'>
            {
                data.map(ob => (
                    <Maincard
                        icon={ob.icon}
                        heading={ob.title}
                        desc = {ob.desc}
                        key = {ob.title}
                    />
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Section1