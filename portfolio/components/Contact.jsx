import React,{useEffect, useRef} from 'react'
// import {BsGithub} from 'react-icons/bs'
import { Fade, Slide } from 'react-reveal'
import useIntersection from '../hooks/useIntersection'

export const Contact = ({l}) => {
  const ref = useRef();
  const inViewport = useIntersection(ref, '0px');

  useEffect(() => {
    if(inViewport){
      l(false)
    }else{
      l(true)
    }
  }, [inViewport]);

  return (
    <div ref={ref} className=' mt-[10vh] lg:mt-[20vh] w-full flex flex-col items-center 2xl:mb-[13vh]'>
      <Fade delay={300} distance='20px' >
      <div className='w-full pt-4 mb-12 flex flex-col  items-end '>
        <p className='text-3xl md:text-5xl 2xl:text-6xl text-black font-bold mb-4'>Contact Me</p>
        <div className='bg-[#ED7373]  2xl:h-2 h-1.5 2xl:w-36 w-28'></div>
      </div>
      </Fade>
      <p className=' text-black text-3xl md:px-[10vw] text-center font-medium my-[5vh]'>samay bhai op hai nasa wale bahut khatarnak hai jitendra sir khopdi phod dete  </p>
      <Fade delay={300} distance='20px' bottom>
      <button className='bg-[#4BF2CC] text-[#1E255E] font-medium text-3xl rounded-sm mt-[3vh] py-3 px-12 text-center align-center'>Email</button>
      </Fade>
      <Slide cascade bottom distance='100' >
      <div className='flex mt-10'>
        <button><img src='/media/twitter.svg' className='w-20 md:w-32'/></button>
        <button><img src='/media/github.svg' className='w-20 md:w-32'/></button>
        <button><img src='/media/li.svg' className='w-20 md:w-32'/></button>
      </div>
      </Slide>
    </div>
  )
}
