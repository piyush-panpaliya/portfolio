import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center h-screen pt-[25vh]  gap-y-[6rem] 2xl:gap-y-[15vh]'>
      <div className='w-full flex justify-between items-center gap-x-[3vw] 2xl:gap-x-[7vw]' >
        <div className='flex flex-col gap-y-2 2xl:gap-y-3 max-w-[40vw]'>
          <p className='text-3xl 2xl:text-4xl font-bold text-[#1E255E]'>Hey, I&apos;m</p>
          <p className='text-5xl 2xl:text-7xl font-extrabold tracking-wide  2xl:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#30A3EF] to-[#00568E] pt-1 pb-3'>Piyush Panpaliya</p>
          <p className='text-3xl 2xl:text-4xl font-bold text-[#1E255E] 2xl:mb-2'>A Web Developer</p>
          <p className='text-lg 2xl:text-xl font-medium text-[#414D56] max-w-[30rem]'>from India passionate about creating exceptional digital experiences</p>
        </div>
        <div className='max-w-[30vw] xl:max-w-[35vw]'>
          <div className='bg-black/[65%] px-5 pt-4 pb-8 rounded-xl flex flex-col gap-y-8 shadow-2xl'>
            <div className='relative flex items-center justify-center'>
              <p className='text-white/75'>Into.js</p>
              <div className='absolute left-[-8px] flex gap-x-2'>
                <div className='bg-white/50 rounded-full w-3 h-3'></div>
                <div className='bg-white/50 rounded-full w-3 h-3'></div>
                <div className='bg-white/50 rounded-full w-3 h-3'></div>
              </div>
            </div>
            <div>
              <p className='text-wrap  xl:text-lg'>dawwwwwwwwwwwwwwwwwww dawawwwwww</p>
              <p className='text-wrap  xl:text-lg'>dawwwwwwwwwwwwwwwwwww wdawawwwww</p>
              <p className='text-wrap  xl:text-lg'>dawwwwwwwwwwwwwwwwwww dawawwwwww</p>
              <p className='text-wrap  xl:text-lg'>dawwwwwwwwwwwwwwwwwww awawwwwwww</p>
              <p className='text-wrap  xl:text-lg'>dawwwwwwwwwwwwwwwwwww wawwwwwwww</p>
            </div>
          </div>
        </div>
      </div>
      <Stack/>
    </div>
  )
}

const Stack = () => {
  const svg=["react.svg","next.svg","mongo.svg","tw.svg"]
  return (
    <div className='flex px-4 gap-x-16'>
      {svg.map((a)=>
      <img key={a} className='w-28 2xl:w-32' src={`/media/${a}`}/>
      )}
    </div>
  )
}


export default Hero