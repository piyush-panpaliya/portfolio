import React from 'react'

export const Appwrapper = ({children}) => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-col absolute left-8 bottom-3 w-12 items-center  gap-y-6'>
        <div className='w-8 h-8 bg-black rounded-full'></div>
        <div className='w-8 h-8 bg-black rounded-full'></div>
        <div className='w-8 h-8 bg-black rounded-full'></div>
        <div className='h-[200px] w-1 bg-black'></div>
      </div>
      <div className='h-full my-16'>
        {children}
      </div>
      <div className='flex flex-col absolute right-8 bottom-3 w-12 items-center  '>
        <p className='text-lg text-black font-medium -rotate-90 mb-36 align-center mr-2'>panpaliyapiyush0@gmail.com</p>
        <div className='h-[200px] w-1 bg-black'></div>
      </div>
    </div>
  )
}
