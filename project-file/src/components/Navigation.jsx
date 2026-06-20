import React from 'react'
import "../styles/navigation.css"
const Navigation = () => {
  return (
    <nav className='nav-bar'>
      <h1 className='icon'>
        IronFit<span>Elite</span>
      </h1>
      <ul className='links'>
        <a href="#hero"><li>Home</li></a>
        <a href="#programs"><li>Programs</li></a>
        <a href="#trainers"><li>Trainers</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
      <button className='join-btn'>Join Now</button>
    </nav>
  )
}

export default Navigation