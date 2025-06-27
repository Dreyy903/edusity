import React from 'react'
import  './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero-content">
        <h1>We ensure better education for a better world</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus natus soluta eius delectus quasi laborum dolore quod provident deserunt alias numquam hic sint quaerat repudiandae, adipisci animi reiciendis. Dicta, quas.</p>
        <button className="btn">Explore More <img src= {dark_arrow} alt="" /> </button>
      </div>
    </div>
  )
}
