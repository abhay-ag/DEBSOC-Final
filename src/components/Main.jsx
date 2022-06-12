import React, {useEffect, useState} from 'react'
import studentsKilaFate from '../media/images/studentsKilaFate.png'
// import Logo from '../media/images/debsoc_logo.png'
import {Achievements, Curriculum, Founders, Motions, Uniqueness} from "../resources/main";
import {Link} from "react-router-dom";

function Main() {
  const Genres = ["netflix", "pop culture", "music", "drama", "tech", "entrepreneurship", "science", "business", "law", "health", "sports"];
  const [genre, setGenre] = useState(0);
  const [motionIndex, setMotionIndex] = useState(0);

  const getRandomMotion = () => setMotionIndex(Math.floor(Math.random() * Motions.length));
  
  useEffect(() => {
    const genreShuffle = setTimeout(() => {
      if (genre + 1 < 11)
        setGenre(genre + 1);
      else
        setGenre(0);
    }, 500);

    return (() => {
      clearTimeout(genreShuffle);
    });

  }, [genre]);

  return (
    <div className="w-full flex-1 mb-20 mx-auto overflow-hidden w-full max-w-full">

      {/* Section 1 - LOGO/Intro */}

      <div className='text-white flex px-16 justify-center sm:justify-around mt-36 max-w-7xl mx-auto'>
        <div className='flex-1'>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">The 12 Month bootcamp to set your mind free!</div>
          <div className="text-xl my-8 leading-relaxed">Join the ongoing batch to explore your interests, express your opinions & become the personality you always wished to be. <span className="-translate-y-1 text-rose-300 text-base rounded-full bg-red-700 px-2 py-0.5 font-semibold inline-flex items-center w-36"><span className="w-1.5 h-1.5 rounded-full bg-rose-300 mr-2 ml-1"></span>Limited Seats</span></div>
          <Link to="/authentication" className="cursor-pointer px-8 py-3 bg-violet-500 hover:bg-violet-600 box-border rounded text-xl">Become a member</Link>
          <div className="my-8 text-lg">For more information about the course, start scrolling through &#8595;</div>
        </div>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        {/*<div className='hidden md:ml-10 md:block'>*/}
        {/*  <img className=" h-40 w-40" src={Logo} alt="Debsoc Logo" />*/}
        {/*</div>*/}
      </div>

      {/* Section 2 - Seduction */}

      <div className="my-10 px-10 sm:px-16 flex flex-col gap-16 justify-center items-center max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl md:w-5/6 font-bold text-center"><span className="text-violet-500">Join</span> our 12 month debating bootcamp & transform your <span className="text-violet-500">thoughts into words</span></h2>
        <div className="text-xl md:text-2xl text-center font-medium">Kickstart your debating journey with peer learning and hands on practice driven 12 months debating bootcamp to become a public speaker, an amazing researcher, speak with fluency and participate in top debating competitions all over India.</div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 lg:px-5 py-5 overflow-hidden min-h-full w-full">
            <div className="bg-gradient-to-br from-violet-400 via-gray-700 to-gray-600 p-0.5 rounded h-full">
              <div className="shadow-sm rounded flex flex-col items-center py-7 px-4 h-full" style={{ background:'linear-gradient(114.7deg, #27272A -9.77%, #18181B 110.32%)' }}>
                <div>
                  <i className="fad fa-comments-alt text-violet-500 text-4xl"></i>
                </div>
                <p className="text-center mt-10 text-lg md:text-xl font-medium text-gray-100">Weekly Live meetings & Group discussions with 25+ hands on practice sessions</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:px-5 py-5 overflow-hidden min-h-full w-full">
            <div className="bg-gradient-to-br from-violet-400 via-gray-700 to-gray-600 p-0.5 rounded h-full">
              <div className="shadow-sm rounded flex flex-col items-center py-7 px-4 h-full" style={{ background:'linear-gradient(114.7deg, #27272A -9.77%, #18181B 110.32%)' }}>
                <div>
                  <i className="fad fa-podium text-violet-500 text-4xl"></i>
                </div>
                <p className="text-center mt-12 text-lg md:text-xl font-medium text-gray-100">Discussions & debates on curated themes that matter, ranging from <span className="text-violet-500 uppercase font-semibold">{Genres[genre]}</span></p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:px-5 py-5 overflow-hidden min-h-full w-full">
            <div className="bg-gradient-to-br from-violet-400 via-gray-700 to-gray-600 p-0.5 rounded h-full">
              <div className="shadow-sm rounded flex flex-col items-center py-7 px-4 h-full" style={{ background:'linear-gradient(114.7deg, #27272A -9.77%, #18181B 110.32%)' }}>
                <div>
                  <i className="fad fa-user-friends text-violet-500 text-4xl"></i>
                </div>
                <p className="text-center mt-6 text-lg md:text-xl font-medium text-gray-100">Most active learning & growth environment. Get trained by seniors, learn with peers & be a part of the most supportive community at Chitkara University.</p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/authentication" className="cursor-pointer px-8 py-3 bg-violet-500 hover:bg-violet-600 box-border rounded text-xl">Apply now</Link>
      </div>

      {/* Section 3 - Kila Fate */}

      <div className="w-full my-10 pt-20 md:pt-10 px-8 flex flex-col items-center justify-center max-w-5xl md:mx-auto">
        <h2 className="text-5xl md:text-6xl md:w-5/6 font-bold text-center mb-6">From just our <span className="text-violet-500">First Batch</span></h2>
        <h3 className="text-2xl md:text-3xl font-medium text-center text-gray-200 mb-8">our students participated in</h3>
        <img className="mt-4 mb-10 md:mb-16" src={studentsKilaFate}  alt="studentsKilaFate"/>
      </div>

      {/* Section 4 - Achievements */}

      <div className="min-h-screen flex items-center justify-center px-8 relative">
        <div className="absolute -z-0" style={{ top:'10%',left:'-300px',height:'600px',width:'600px',background:'radial-gradient(50% 50% at 50% 50%, #8080FF 0%, rgba(128, 128, 255, 0) 100%)',opacity:'0.1'}}></div>
        <div className="max-w-6xl flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl md:w-5/6 font-bold text-center mb-6">On a mission to <span className="text-violet-500">empower students</span></h2>
          <h3 className="text-2xl mt-8 mb-12 py-2 text-center font-medium">Not like your average club, speaking volumes with actions. Check out the success of our students.</h3>
          <div className="flex flex-wrap justify-evenly">
            {Achievements.map((person, i) => (
              <div key={`achievements-element-${i}`} className="block group bg-gray-900 shadow-sm shadow-violet-500 rounded-lg cursor-default overflow-hidden space-y-4 m-5 justify-around pb-4 w-60 z-10">
                <img loading="lazy" src={person.image_link} alt="student" className="h-60 w-60 w-full object-center object-cover" />
                <h2 className="text-lg text-gray-300 font-semibold text-center">{person.name}</h2>
                <p className="text-gray-400 text-base text-center px-4">
                  {person.achievement.map((value, j) => (
                    <span className="block">{value}</span>
                  ))}
                </p>
              </div>
            ))}
            <img loading="lazy" src="	https://devsnest.in/_next/static/media/grid-gray-dots.87e2a612.svg" alt="illustration" className="h-72 w-72 hidden md:block select-none absolute -left-[15%] -bottom-1/4" />
            <img loading="lazy" src="	https://devsnest.in/_next/static/media/grid-gray-dots.87e2a612.svg" alt="illustration" className="h-52 w-52 hidden md:block select-none absolute -top-36 -right-24" />
          </div>
        </div>
      </div>

      {/* Section 5 - Curriculum */}

      <div className="mb-10 pt-16 flex flex-col max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl md:w-5/6 font-bold text-center mb-6 mx-auto">Our <span className="text-violet-500">Curriculum</span></h2>
        <div className="flex items-stretch justify-center flex-wrap w-full max-w-screen-lg mt-8">
          {Curriculum.map((element, i) => (
            <div className="w-full md:w-1/2 py-4 px-5" key={`curriculum-element-${i}`}>
              <div className="min-h-full bg-zinc-800 rounded-md shadow-sm p-6">
                <div>{element.svg}</div>
                <h3 className="text-white font-medium text-2xl my-4">{element.title}</h3>
                <p className="font-normal text-zinc-400">{element.info}</p>
              </div>
            </div>
          ))}
        </div>
        <Link className="text-violet-500 hover:text-violet-600 transition-colors font-medium text-2xl mx-2 mt-12 text-center" to="/curriculum">Check our detailed curriculum &#8594;</Link>
      </div>

      {/* Section 6 - Uniqueness */}

      <div className="my-10 pt-16 flex flex-col max-w-7xl mx-auto relative">
        <div className="absolute -z-0" style={{ top:'-40%',right:'-300px',height:'600px',width:'600px',background:'radial-gradient(50% 50% at 50% 50%, #8080FF 0%, rgba(128, 128, 255, 0) 100%)',opacity:'0.1'}}></div>
        <h2 className="text-5xl md:text-6xl md:w-5/6 font-bold text-center mb-12 mx-auto">What makes us <span className="text-violet-500">Unique!</span></h2>
        <div className="flex flex-wrap items-stretch content-stretch w-full max-w-screen-xl">
          {Uniqueness.map((element, i) => (
            <div key={`uniqueness-element-${i}`} className="w-full md:w-1/3 p-5 relative">
              <img loading="lazy" src="https://devsnest.in/_next/static/media/corner-boxes.315df797.svg" alt="box" className="absolute top-4 right-5 p-0.5 opacity-10 select-none" />
              <div className="h-full bg-gradient-to-br from-indigo-400 via-zinc-700 to-zinc-600 p-0.5 rounded-md">
                <div className="min-h-full shadow-sm p-6 rounded-md" style={{ background:"linear-gradient(114.7deg, #27272A -9.77%, #18181B 110.32%)" }}>
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">{element.svg}</div>
                  <h3 className="text-white text-left font-medium text-lg lg:text-2xl my-4">{element.title}</h3>
                  <p className="text-left text-zinc-400">{element.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 7 - Motion Randomness */}

      <div className="my-10 pt-16 flex flex-col md:flex-row md:justify-center md:items-center max-w-4xl mx-auto relative">
        <h2 className="md:flex-1 text-5xl md:text-6xl font-bold text-center mb-8 mx-auto md:mr-8 md:ml-0"><span className="md:block">Random</span> <span className="md:block text-violet-500">Motion</span></h2>
        <div className="md:flex-1 flex md:block justify-center items-center my-8 border-0 md:border-l-4 border-violet-500">
          <div className="flex flex-col justify-between h-80 w-full rounded-lg py-8 px-10">
            <div className="text-gray-200 text-center text-xl font-medium motion-quote-font random-motion-background -rotate-12 max-h-36 py-6"><span className="inline-block rotate-12">{Motions[motionIndex]}</span></div>
            <button className="z-50 mx-auto py-2 px-6 bg-violet-500 hover:bg-violet-600 rounded font-semibold text-lg" onClick={getRandomMotion}>New <i className="fal fa-long-arrow-right ml-3 translate-y-px"></i></button>
          </div>
        </div>
      </div>

      {/* Section 8 - Founders */}

      <div className="mt-10 pt-16 flex flex-col relative">
        <div className="absolute -z-0" style={{ top:'-20%',right:'-300px',height:'600px',width:'600px',background:'radial-gradient(50% 50% at 50% 50%, #8080FF 0%, rgba(128, 128, 255, 0) 100%)',opacity:'0.1'}}></div>
        <div className="flex flex-col max-w-7xl mx-auto relative">
          <h2 className="text-5xl md:text-6xl font-bold text-center">Meet Our <span className="text-violet-500">Founders</span></h2>
          <div className="flex flex-wrap justify-center mx-auto">
            {Founders.map((founder, i) => (
              <div key={`founder-element-${i}`} className="m-5 pt-24">
                <div className="h-full flex items-center space-x-8 px-5 py-10 bg-violet-700 rounded-lg">
                  <div>
                    <img loading="lazy" src={founder.image} alt="founder" className="mx-auto h-44 w-44 rounded-full -mt-32" />
                    <div className="pt-3">
                      <div className="flex flex-col space-y-1 text-center">
                        <div className="text-2xl whitespace-nowrap">{founder.name}</div>
                        <div className="text-base opacity-70 whitespace-nowrap">{founder.role}, Debsoc</div>
                        <div className="flex justify-center space-x-5 pt-3">
                          <a href={founder.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram text-3xl text-white opacity-70"></i></a>
                          <a href={founder.linkedIn} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-3xl text-white opacity-70"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 font-light hidden md:block">{founder.wisdom}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;