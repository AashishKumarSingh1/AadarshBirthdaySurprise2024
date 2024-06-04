import { useState } from 'react'
import NavBar from './navigation'
import Footer from './Footer'
import '../App.css'
import FaqAccordions from './faq'
import FaqCard from './faqCard'
import Contact from './Contact'
import Realdata from './RealTimeData'
import Happy from './Happy'
import SlideImages from './Slideshow'
import Gallery from './Gallery'
import GalleryCard from './GalleryCard'
import Home from './Home'
function Integration() {
  return (
    <>
    <div><NavBar />
    <div className='mt-0 pt-0' id="Home"> <Home /></div>
<div id="Happy" className='pt-14 '>
  <Happy />
</div>
<div className=' mt-80 pt-20 sm:mt-auto'id="Realdata" >
<Realdata />
</div>
     <div id="GalleryCard" className='pt-12 '>
      <GalleryCard />
     </div>
     <div className="flex items-center justify-center min-h-screen pt-10">
    <div className=" shadow-lg w-full md:w-1/2  rounded-lg">      
    </div>
    <div id="FaqCard" className='pt-14'>
    <FaqCard />
    </div>
  </div>
  <div className='bg-slate-1000 pt-16' id="Contact">
    <h1 className='text-white text-2xl text-center font-semibold  cursor-pointer block '>Contact Me</h1>
    <Contact />
  </div>
  </div>
  <div className="h-screen block pt-10" id="Gallery">
  <Gallery />
  </div>
  <div id="Footer" className='pt-10'><Footer /></div>
    </>
  )
}
export default Integration
