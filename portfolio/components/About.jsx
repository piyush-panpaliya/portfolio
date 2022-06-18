import React from 'react'

const About = () => {
  return (
    <div className='w-full flex flex-col items-center h-screen py-4 mt-[30vh] '>
      <div className='bg-[#F1FDFF] w-[68vw] relative px-20 2xl:px-24 rounded-xl pt-16 2xl:pt-28 pb-12 2xl:pb-24 text-black font-medium'>
        <p className='text-2xl 2xl:text-3xl mb-16 ml-16'>piyush bhaiiii</p>
        <p className=' 2xl:text-xl -ml-12 2xl:mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        </p>
        <img src='/media/face.svg' className='w-28 2xl:w-36 absolute left-[-2rem] top-4 '/>
        <div className='flex flex-col items-end gap-y-2 absolute right-[-4rem] top-[-40px]'>
          <p className='text-5xl 2xl:text-6xl font-bold'>About Me</p>
          <div className='bg-[#ED7373] 2xl:h-2 h-1.5 2xl:w-36 w-28'></div>
        </div>
      </div>
      
    </div>
  )
}

export default About