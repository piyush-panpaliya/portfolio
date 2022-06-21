import React from 'react'
import { Fade,Slide } from 'react-reveal';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const Hero = () => {
  return (
    <div className='flex flex-col items-center lg:h-screen pt-[10vh] md:pt-[13vh] gap-y-8 md:gap-y-[5rem] 2xl:gap-y-[15vh]'>
      <div className='w-full flex flex-col md:flex-row justify-between items-center gap-y-12 md:gap-x-[3vw] 2xl:gap-x-[7vw]' >
        <div className='flex flex-col md:gap-y-2 2xl:gap-y-3 w-full md:max-w-[40vw]'>
        <Slide bottom>
          <p className='text-xl md:text-3xl 2xl:text-4xl font-bold text-[#1E255E]'>Hey, I&apos;m</p>
          <p className='text-4xl md:text-5xl 2xl:text-7xl font-extrabold tracking-wide  2xl:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#30A3EF] to-[#00568E] pt-1 md:pb-3'>Piyush Panpaliya</p>
          <div className=' flex items-center gap-x-3'>
            <Fade delay={1700}>
            <p className='text-xl md:text-3xl 2xl:text-4xl font-bold text-[#1E255E] 2xl:mb-2 -mb-2'>A </p>
            <Typist 
              className='text-3xl 2xl:text-4xl font-bold text-[#1E255E]'
              cursor={{blink:true,hideWhenDone:true,hideWhenDoneDelay:1000}}
              >
              <Typist.Delay ms={2500} />
              <span className='text-xl 2xl:text-4xl font-bold text-[#1E255E] 2xl:mb-2'>Frontend Developer.</span>
              <Typist.Delay ms={1000} />
              <Typist.Backspace count={19} delay={200} />
              <span className='text-xl 2xl:text-4xl font-bold text-[#1E255E] 2xl:mb-2'>Backend Devloper.</span>
              <Typist.Delay ms={1000} />
              <Typist.Backspace count={17} delay={200} />
              <span className='text-xl 2xl:text-4xl font-bold text-[#1E255E] 2xl:mb-2'>ReactJS Developer.</span>
            </Typist>
            </Fade>
          </div>
          </Slide>
          <Fade left delay={800} distance='50px'>
            <p className='text-lg 2xl:text-xl font-medium text-[#414D56] w-full md:max-w-[30rem]'>from India, passionate about creating exceptional digital experiences</p>
          </Fade>
        </div>
        <div className='w-[90vw]  md:max-w-[30vw] xl:max-w-[35vw]  '>
          <img src='/media/intro.png ' className=' md:w-full w-[90vw] shadow-2xl'/>
          {/* <div className='bg-black/[65%] px-5 pt-4 pb-8 rounded-xl flex flex-col gap-y-8 shadow-2xl'>
            <div className='relative flex items-center justify-center'>
              <p className='text-white/75'>Into.js</p>
              <div className='absolute left-[-8px] flex gap-x-2'>
                <div className='bg-white/50 rounded-full w-3 h-3'></div>
                <div className='bg-white/50 rounded-full w-3 h-3'></div>
                <div className='bg-white/50 rounded-full w-3 h-3'></div>
              </div>
            </div>
            <div>
              <textarea className='bg-transparent border-none 2xl:text-lg w-full h-full' placeholder='Type your message here...'>
                dawgyu daui duawduagwdaudtawdg vudyawd afwdvaywdawd ad yt
              </textarea>
            </div>
          </div> */}
        </div>
      </div>
      <Stack/>
    </div>
  )
}

const Stack = () => {
  const svg=["react.svg","next.svg","mongo.svg","tw.svg"]
  return (
      <Fade bottom delay={2000}   opposite cascade>
    <div className='flex flex-wrap md:flex-nowrap px-4 gap-3 md:gap-x-16 justify-center'>
      {svg.map((a)=>
      <img key={a} className='w-[15vw] md:w-24 2xl:w-32' src={`/media/${a}`}/>
      )}
    </div>
      </Fade>
  )
}


export default Hero