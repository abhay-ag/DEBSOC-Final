import React from 'react'
import Maincard from './Maincard'
import Computer from './imgs/Computer'
import ReactIco from './imgs/React'
import Idea from './imgs/Idea'
import Speaker from './imgs/Speaker'
import Group from './imgs/Group'
import Geometry from './imgs/Geometry'

function Section5() {
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
  return (
    <div className='w-full h-fit md:h-[90vh] rad-grad-1 flex flex-col justify-center items-center'>
        <h1 className='text-[8vw] md:text-7xl font-bold text-white'>
            What makes us<font className = 'text-magenta'> Unique!</font>
        </h1>
        <div className='w-3/4 my-8 h-fit flex flex-col md:flex-row flex-wrap justify-between'>
            {
                data.map(ob => (
                    <Maincard
                        icon={ob.icon}
                        heading={ob.title}
                        desc = {ob.desc}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Section5