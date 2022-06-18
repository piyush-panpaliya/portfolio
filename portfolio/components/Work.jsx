import React from 'react'
import {FaAngleDown} from 'react-icons/fa'

const Card = () => {
  return (
    <div className='flex w-full  justify-between'>
      <img className='w-[40vw] py-8 rounded-3xl  object-cover ' src='/media/thumb.jpg'/>
      <div className='flex flex-col items-end gap-y-4 w-[25vw]'>
        <p className='text-[40px] 2xl:text-5xl text-black font-bold'>Streamably</p>
        <div className='flex gap-x-4 pr-4'>
          <div className='bg-black w-6 h-6 rounded-full'></div>
          <div className='bg-black w-6 h-6 rounded-full'></div>
        </div>
        <div className='bg-[#F1FDFF] rounded-lg text-right w-[30vw]  px-4 py-6'>
          <p className='text-black font-medium  2xl:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus cumque cum nobis provident facilis dicta fugit aperiam ex, neque dignissimos, modi atque fuga unde eius, dolores voluptatem perferendis quo sit!</p>
        </div>
        <p className='text-black font-medium'>Reactjs Tailwindcss Lambda FaunDB</p>
      </div>
    </div>
  )
}


const Work = () => {
  return (
    <div className=' mt-[30vh] relative w-full flex flex-col items-center gap-y-[5vh] '>
      <div className='w-full pt-4 mb-8 flex flex-col items-start '>
        <p className='text-5xl 2xl:text-6xl text-black font-bold mb-4'>My Work</p>
        <div className='bg-[#ED7373]  2xl:h-2 h-1.5 2xl:w-36 w-28'></div>
      </div>
      <div className='flex flex-col items-center gap-y-[10vh] w-[65vw]'>
        {[1,2].map(a=><Card key={a}/>)}
      </div>
      <div className='bg-[#F1FDFF] px-4 py-3 rounded-3xl flex gap-x-2 items-center hover:cursor-pointer'>
        <p className='text-black font-medium'>Show more</p>
        <FaAngleDown className='text-black mt-1'/>
      </div>
    </div>
  )
}

export default Work