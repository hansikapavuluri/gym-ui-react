import React from 'react'
import "../styles/hero.css"

const Hero = () => {
  return (
    <section className='hero' id="hero">
      <div className='hero-overlay'>
        <div className="hero-content">
          <h1 className='title'>transform your <span>Body</span> & mind</h1>
          <p className='sub-title'>Unleash your inner strenght with <strong>IronFit Elite</strong> - Where passion meets power</p>
          <div className='hero-buttons'>
            <button className='primary-button'>Join Now</button>
            <button className='secondary-button'>Explore Programs</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero