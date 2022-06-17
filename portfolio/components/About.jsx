import React from 'react'

const About = () => {
  return (
    <div className='w-full flex flex-col items-center h-screen mt-[50px]'>
      <div className='bg-[#F1FDFF] w-[70vw] relative px-24 rounded-xl pt-28 pb-24 text-black font-medium'>
        <p className='text-3xl mb-20 ml-16'>piyush bhaiiii</p>
        <p className='text-xl -ml-12 mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum asperiores sed id sapiente et reiciendis, voluptatum dolor porro qui laudantium provident. Vel in voluptates voluptate quos quasi ullam cum?
        </p>
        <img src='/media/face.svg' className='w-40 absolute left-[-2rem] top-8 '/>
        <div className='flex flex-col items-end gap-y-2 absolute right-[-4rem] top-[-40px]'>
          <p className='text-6xl'>About Me</p>
          <div className='bg-[#ED7373] h-2 w-36'></div>
        </div>
      </div>
      
    </div>
  )
}

export default About