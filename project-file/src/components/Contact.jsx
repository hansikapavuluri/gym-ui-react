import React from 'react'
import "../styles/contact.css"

const Contact = () => {
  return (
    <section className='contact-section' id="contact">
      <div className='contact-overlay'>
        <h1 className='contact-title'>Contact  
          <span> IronFit Elite</span>
        </h1>
        <p>Have question or want to join? Let's get in touch!</p>
        <form className='contact-form'>
          <div className='input-section'>
            <input type="text" placeholder='Your Name' required/>
            <input type="email" placeholder='Your Email' required/>
          </div>
          <textarea placeholder='Your Message' required></textarea>
          <button type='submit' className='contact-button'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact