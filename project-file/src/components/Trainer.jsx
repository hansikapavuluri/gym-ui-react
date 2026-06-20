import React from 'react'
import {trainerData} from "../data/Data.js"
import "../styles/trainer.css"
const Trainer = () => {
  return (
    <section className="trainer-section reveal" id="trainers">
      <h2 className='trainer-title'>Meet our trainers</h2>
      <div className="trainer-grid">
        {
        trainerData.map((trainer)=>(
          <div className='trainer-card' key={trainer.id}>
            <img src={trainer.img}/>
            <h3>{trainer.name}</h3>
            <p>{trainer.role}</p>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Trainer