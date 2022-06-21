import React,{useState} from 'react'
import { Fade } from 'react-reveal';
import {scroller} from 'react-scroll';

const Header = () => {
  const [open, setopen] = useState(false)
  const handle=(a)=>{
    scroller.scrollTo(a, {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId:'contain'
    })
    setopen(false);
  }

  return (
    <Fade top cascade duration={1500}>
    <div>

    {!open&&<div className='absolute top-0 left-0 mr-4 h-16 md:h-20 2xl:h-24 w-full z-10 bg-white/75 flex gap-x-12 justify-end items-center px-8'>
      <div className=' w-full  hidden md:flex gap-x-12 justify-end items-center'>
        <p onClick={()=>handle("home")} className='hover:cursor-pointer text-xl 2xl:text-2xl font-medium text-[#1E255E]'>Home </p>
        <p onClick={()=>handle("about")} className='hover:cursor-pointer text-xl 2xl:text-2xl font-medium text-[#1E255E]'>About me</p>
        <p onClick={()=>handle("work")} className='hover:cursor-pointer text-xl 2xl:text-2xl font-medium text-[#1E255E]'>My work </p>
        <p onClick={()=>handle("contact")} className='hover:cursor-pointer text-xl 2xl:text-2xl font-medium text-[#1E255E]'>Contact</p>
        <button className='border-2 border-[#1E255E] py-2 px-8 mr-4 text-xl 2xl:text-2xl font-medium text-[#1E255E]'>Resume</button>
      </div>
      <div className='w-full flex md:hidden gap-x-12 justify-end items-center'>
        <button onClick={()=>setopen(true)} className='rotate-90 border-2 border-[#1E255E]  py-3 px-3 mr-4 text-xl 2xl:text-2xl font-medium text-[#1E255E]'>|||</button>
      </div>
    </div>}
      {open&&<Mheader setopen={setopen} handle={handle}/>}
    </div>
    </Fade>
  )
}

const Mheader = ({setopen,handle}) => {
  return (
    <Fade right duration={200} opposite cascade>
    <div className='absolute top-0  right-0 h-screen pr-12 pl-12  pt-32 items-center z-10 bg-white/75 flex flex-col gap-y-6  '>
      <button onClick={()=>setopen(false)} className='absolute top-4 right-4  border-2 border-[#1E255E]  py-1 px-3 mr-4 text-2xl  font-medium text-[#1E255E]'>x</button>
      <p onClick={()=>handle("home")} className='hover:cursor-pointer text-3xl md:text-xl 2xl:text-2xl font-medium text-[#1E255E]'>Home </p>
      <p onClick={()=>handle("about")} className='hover:cursor-pointer text-3xl md:text-xl 2xl:text-2xl font-medium text-[#1E255E]'>About me</p>
      <p onClick={()=>handle("work")} className='hover:cursor-pointer text-3xl md:text-xl 2xl:text-2xl font-medium text-[#1E255E]'>My work </p>
      <p onClick={()=>handle("contact")} className='hover:cursor-pointer text-3xl md:text-xl 2xl:text-2xl font-medium text-[#1E255E]'>Contact</p>
      <button className='border-2 border-[#1E255E] py-2 px-8  text-xl 2xl:text-2xl font-medium text-[#1E255E]'>Resume</button>
    </div>
    </Fade>
  )
}


export default Header