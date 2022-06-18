import React from 'react'

const Header = () => {
  return (
    <div className='absolute top-0 left-0 mr-4 h-20 2xl:h-24 w-full z-10 bg-white/75 flex gap-x-12 justify-end items-center px-8'>
      <p className='text-xl 2xl:text-2xl font-medium text-[#1E255E]'>Home </p>
      <p className='text-xl 2xl:text-2xl font-medium text-[#1E255E]'>About me</p>
      <p className='text-xl 2xl:text-2xl font-medium text-[#1E255E]'>My work </p>
      <p className='text-xl 2xl:text-2xl font-medium text-[#1E255E]'>Contact</p>
      <button className='border-2 border-[#1E255E] py-2 px-8 mr-4 text-xl 2xl:text-2xl font-medium text-[#1E255E]'>Resume</button>
    </div>
  )
}

export default Header