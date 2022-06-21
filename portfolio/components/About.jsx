import React from 'react'
import { Fade } from 'react-reveal'

const About = () => {
  return (
    <div className='w-full flex flex-col items-center lg:h-screen py-4 mt-[10vh] lg:mt-[30vh] '>
      <Fade distance='50px' delay={200}>
      <div className='bg-[#F1FDFF] w-full md:w-[68vw] relative px-20 2xl:px-24 rounded-xl pt-16 2xl:pt-28 pb-4 md:pb-12 2xl:pb-24 text-black font-medium'>
        <p className='text-xl md:text-2xl 2xl:text-3xl mb-8 md:mb-16 ml-8 md:ml-16'>piyush bhaiiii</p>
        <p className=' 2xl:text-xl -ml-12 2xl:mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        </p>
        <img src='/media/face.svg' className='w-20 md:w-28 2xl:w-36 absolute left-[-10px] md:left-[-2rem] top-6 md:top-4 '/>
        <Fade delay={600} >
        <div className='flex flex-col items-end gap-y-2 absolute right-[20px] md:right-[-4rem] top-[-24px] md:top-[-40px]'>
          <p className='text-3xl md:text-5xl 2xl:text-6xl font-bold'>About Me</p>
          <div className='bg-[#ED7373] 2xl:h-2 h-1.5 2xl:w-36 w-28'></div>
        </div>
        </Fade>
      </div>
      </Fade>
      
    </div>
  )
}

export default About