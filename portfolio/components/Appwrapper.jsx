import React from 'react'

export const Appwrapper = ({children}) => {
  return (
    <div className='flex flex-col h-screen  py-5 overflow-y-scroll overflow-x-hidden'>
      <div className='flex flex-col absolute left-4 bottom-0 w-12 items-center  gap-y-4'>
        <button ><img className='w-12 ' src='/media/github.svg'/></button>
        <button ><img className='w-12 ' src='/media/twitter.svg'/></button>
        <button ><img className='w-12 ' src='/media/li.svg'/></button>
        <div className='h-[100px] w-0.5 bg-black'></div>
      </div>
      <div className='h-full mx-16 px-[5vw] 2xl:px-[8vw] flex  flex-col items-center '>
        {children}
      </div>
      <div className='flex flex-col absolute right-8 bottom-0 w-12 items-center  '>
        <p className=' text-black font-medium rotate-90 mb-32 align-center ml-1'>panpaliyapiyush0@gmail.com</p>
        <div className='h-[80px] w-0.5 bg-black'></div>
      </div>
    </div>
  )
}
