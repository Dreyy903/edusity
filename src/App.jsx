import { useState } from 'react'
import Hero from './component/Hero/Hero'
import Program from './component/Programs/program'
import Title from './component/Title/title'
import { About } from './component/About/about'
import { Campus } from './component/Campus/campus'
import { Testimonial } from './component/Testimonial/Testimonial'
import Contact from './component/Contact/Contact'
import Navbar from './component/navbar/Navbar'


function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
        <div className="container">
          <Title subTitle='OUR PROGRAMS' title='What we Offer'/>
          <Program/>
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
