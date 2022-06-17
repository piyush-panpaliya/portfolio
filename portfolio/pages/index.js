import Head from 'next/head'
import About from '../components/About'
import { Appwrapper } from '../components/Appwrapper'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Work from '../components/Work'

export default function Home() {
  return (
    <div className='w-screen h-screen px-4 py-5 flex flex-col gap-y-40 overflow-x-hidden overflow-y-scroll bg-gradient-to-r from-purple-400 to-yellow-400 tracking-wide '>
      <Appwrapper>
        <Header/>  
        <Hero/>
        <About/>
        <Work/>
        <Footer/>
      </Appwrapper>
    </div>
  )
}
