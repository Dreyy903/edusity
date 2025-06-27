import { useState } from 'react'
import Hero from './component/Hero/Hero'
import Title from './component/Title/Title'
import { Campus } from './component/Campus/Campus'
import { Testimonial } from './component/Testimonial/Testimonial'
import Contact from './component/Contact/Contact'
import Navbar from './component/navbar/Navbar'
import Program from './component/Programs/Program'
import About from './component/About/about'



function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Program />
        <div className="container">
          <Title subTitle='OUR PROGRAMS' title='What we Offer'/>
          <About/>
          <Title subTitle='Gallery' title='Campus Photos'/>
          <Campus/>
          <Title subTitle='TESTIMONIALS' title='What Student Says'/>
          <Testimonial/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact/>
        </div>
    </div>
  )
}

export default App
