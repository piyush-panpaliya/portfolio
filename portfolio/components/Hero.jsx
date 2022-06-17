import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-between h-screen pt-[25vh] px-[10vw] gap-y-16'>
      <div className='w-full flex justify-between items-center ' >
        <div className='flex flex-col gap-y-3 max-w-[40vw]'>
          <p className='text-4xl font-bold text-[#1E255E]'>Hey, I&apos;m</p>
          <p className='text-7xl font-extrabold tracking-wide  mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#30A3EF] to-[#00568E] pt-1 pb-3'>Piyush Panpaliya</p>
          <p className='text-4xl font-bold text-[#1E255E] mb-2'>A Web Developer</p>
          <p className='text-xl font-medium text-[#414D56] max-w-[30rem]'>from India passionate about creating exceptional digital experiences</p>
        </div>
        <div>
          <div className='bg-black/80 px-5 pt-4 pb-8 rounded-xl flex flex-col gap-y-8'>
            <div className='relative flex items-center justify-center'>
              <p>Into.js</p>
              <div className='absolute left-[-8px] flex gap-x-2'>
                <div className='bg-white/50 rounded-full w-4 h-4'></div>
                <div className='bg-white/50 rounded-full w-4 h-4'></div>
                <div className='bg-white/50 rounded-full w-4 h-4'></div>
              </div>
            </div>
            <div>
              <p>dawwwwwwwwwwwwwwwwwwwwwwwwadwdawawwwwww</p>
              <p>dawwwwwwwwwwwwwwwwwwwwwwwwwadwdawawwwww</p>
              <p>dawwwwwwwwwwwwwwwwwwwwwwwwadwdawawwwwww</p>
              <p>dawwwwwwwwwwwwwwwwwwwwwwwadwdawawwwwwww</p>
              <p>dawwwwwwwwwwwwwwwwwwwwwwadwdawawwwwwwww</p>
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
    <div className='flex px-4 gap-16'>
      {svg.map((a)=>
      <img key={a} className='w-32' src={`/media/${a}`}/>
      )}
    </div>
  )
}


export default Hero