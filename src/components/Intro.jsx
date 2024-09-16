import { useState } from 'react';
import { navigate } from 'wouter/use-browser-location';
import Avatar from '../assets/avatar3.png';
import Header from './Header';

function Intro() {

  const [hovering, setHovering] = useState(false);

  const handleClickImg = () => {
    navigate('/sections')
  }
  
  return (
    <>
      <Header />
      <div
        className='flex flex-col items-center justify-center h-[95vh] pb-20'
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        >
        <div>
            <img
              src={Avatar}
              alt='avatar'
              className={`w-52 h-52 rounded-full cursor-pointer bg-dark dark:bg-light ${!hovering && 'animate-breath'}`}
              onClick={handleClickImg}
            />
        </div>
        <div className={`cursor-pointer text-7xl mt-12 font-bold tracking-[0.2rem] duration-300 ${!hovering && 'text-[0px]'}`}>
          <span className='hover:text-neonPink duration-300'>J</span>
          <span className='hover:text-neonTurquoise duration-300'>O</span>
          <span className='hover:text-neonPink duration-300'>S</span>
          <span className='hover:text-neonTurquoise duration-300'>E</span>

          <span className='hover:text-neonPink duration-300'> </span>

          <span className='hover:text-neonPink duration-300'>L</span>
          <span className='hover:text-neonTurquoise duration-300'>U</span>
          <span className='hover:text-neonPink duration-300'>I</span>
          <span className='hover:text-neonTurquoise duration-300'>S</span>

          <span className='hover:text-neonPink duration-300'> </span>

          <span className='hover:text-neonPink duration-300'>C</span>
          <span className='hover:text-neonTurquoise duration-300'>O</span>
          <span className='hover:text-neonPink duration-300'>B</span>
          <span className='hover:text-neonTurquoise duration-300'>O</span>

        </div>
        <div className={`
          tracking-[1rem] bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 mt-2 pl-4 duration-300 
          ${!hovering && 'text-[0px]'}
        `}>
          WEB DEVELOPER
        </div>
      </div>
    </>
  )
}

export default Intro;
