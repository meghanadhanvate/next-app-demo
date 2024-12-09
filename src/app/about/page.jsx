
import React from 'react'
import './about.css'
import cloud_hand from '../../images/About/cloud-with-hand.jpg'
import Image from 'next/image'

const About = () => {

  return (
    <div>
        <section id='who-we-are-banner' className='Who-we-are-banner'>
        <div className='WWR-banckground-image'><Image src={cloud_hand} alt="cloud hand" /></div>
        <div className='WWR-text'>
          <p className='Innovators'>Innovators</p>
          <p className='who-we-are'>WHO ARE WE?</p>
          <p className='not-by-words'>not by words</p>
          <p className='but-by-Action'>but by Action</p>
        </div>
        </section>
    </div>
  )
}

export default About
