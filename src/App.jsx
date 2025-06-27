import { useState } from 'react'
import Hero from './component/Hero/Hero'
import Title from './component/Title/Title'
import { About } from './component/About/About'
import { Campus } from './component/Campus/Campus'
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
