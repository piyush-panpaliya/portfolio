import Head from 'next/head'
import React, { useState } from 'react'
import About from '../components/About'
import { Appwrapper } from '../components/Appwrapper'
import { Contact } from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Work from '../components/Work'
import { Element } from 'react-scroll'

export default function Home() {
  const [link, setlink] = useState(true)
  return (
    <div className='relative w-screen h-screen  flex flex-col gap-y-40 overflow-hidden subpixel-antialiased  tracking-wide '>
      <img className='absolute z-[-10] top-0 w-[300vw] h-screen lg:w-screen' src='/media/bg.png'/>
      <Appwrapper l={link}>
          <Header/>
        <Element name="home" className="w-full flex-col flex items-center ">
          <Hero/>
        </Element>
        <Element name="about" className="w-full flex-col flex items-center ">
          <About/>
        </Element>
        <Element name="work" className="w-full flex-col flex items-center ">
          <Work/>
        </Element>
        <Element name="contact" className="w-full flex-col flex items-center ">
          <Contact l={setlink}/>
        </Element>
        <Footer/>
      </Appwrapper>
    </div>
  )
}
