import Head from 'next/head'
import About from '../components/About'
import { Appwrapper } from '../components/Appwrapper'
import { Contact } from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Work from '../components/Work'

export default function Home() {
  return (
    <div className='relative w-screen h-screen  flex flex-col gap-y-40 overflow-hidden subpixel-antialiased  tracking-wide '>
      <img className='absolute z-[-10] top-0 w-screen' src='/media/bg.png'/>
      <Appwrapper>
        <Header/>  
        <Hero/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
      </Appwrapper>
    </div>
  )
}
