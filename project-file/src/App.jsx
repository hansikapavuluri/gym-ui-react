import React, { useEffect } from 'react'
import "./App.css"
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Programs from './components/Programs.jsx'
import Trainer from './components/Trainer.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  useEffect(()=>{
    const revealElements = document.querySelectorAll(".reveal");
    const handleScroll = ()=>{
      revealElements.forEach((el)=>{
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight-100){
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);


  return (
    <div>
      <Navigation />
      <Hero/>
      <Programs />
      <Trainer />
      <Contact />
      <Footer />
    </div>
  )
}

export default App