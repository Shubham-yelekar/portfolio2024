import React from 'react'
import {motion} from 'framer-motion'
import Footer from '../components/Footer'


const About = () => {
  return (
    <motion.div className='p-2 sm:p-4'>
      <motion.div className='top-blob-about'></motion.div>
      <motion.div className='top-grid-about'></motion.div>
      <div className='about-grid-wrapper'>

        <div className='bento-card intro-box'>
          <h3>I like to build what i design,</h3>
          {/* <p>Been diving into the visual vibe for over ten years, always on a mission to make things look awesome, one pixel at a time.</p>
          <p>Websites, software interfaces, icons — that’s where my heart is, dedicating my skills to perfecting these realms.</p>
          <p>My curiosity's like a never-ending fuel, pushing me to polish my skills and make sure everything I touch turns into digital gold.</p> */}
       </div>

       <div className='bento-card profile-img-box'></div>

       <div className='bento-card experience-box'><h5>Experience</h5></div>
       <div className='bento-card map-box'><h5>Map</h5></div>

       <div className='bento-card x-box'><h5>X</h5></div>
       <div className='bento-card linkdin-box'><h5>Linkedin</h5></div>
       <div className='bento-card tech-stack-box'><h5>Tech Stack</h5></div>
       <div className='bento-card tool-box'><h5>Tool box</h5></div>
       <div className='bento-card experimental-box'><h5>Experimantal</h5></div>
       <div className='bento-card more-about-box'><h5>More About</h5></div>
       <div className='bento-card hobby-box'><h5>Hobby</h5></div>
       <div className='bento-card bucket-box'><h5>Bucket List</h5></div>
       <div className='bento-card thankyou-boy'><h5>Thank you</h5></div>
      </div>
      <Footer/>
      </motion.div>
  )
}

export default About