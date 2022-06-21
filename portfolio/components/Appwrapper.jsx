import React from 'react'
import { Fade } from 'react-reveal'

export const Appwrapper = ({children,l}) => {

  return (
    <div   id="contain" className='flex flex-col h-screen  py-5 overflow-y-scroll overflow-x-hidden'>
      <Fade bottom delay={400} duration={400} when={l} >
      <div className='hidden md:flex flex-col absolute left-4 bottom-0 w-12 items-center  gap-y-4'>
        <button className='p-0'><img className='w-16 2xl:w-16' src='/media/github.svg'/></button>
        <button className='p-0'><img className='w-12 2xl:w-16' src='/media/twitter.svg'/></button>
        <button className='p-0'><img className='w-12 2xl:w-16' src='/media/li.svg'/></button>
        <div className='h-[100px] w-0.5 bg-black'></div>
      </div>
      </Fade>
      <div className='h-full md:mx-16 px-[5vw] 2xl:px-[8vw] flex  flex-col items-center '>
        {children}
      </div>
      <Fade bottom delay={400} duration={400} when={l} >
      <div className=' flex-col absolute right-8 bottom-0 w-12 items-center  hidden md:flex'>
        <p className=' text-black font-medium rotate-90 mb-32 align-center ml-1'>panpaliyapiyush0@gmail.com</p>
        <div className='h-[80px] w-0.5 bg-black'></div>
      </div>
      </Fade>
    </div>
  )
}
