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
          <h3>"I like to build what i design,"</h3>
          <p>I love bringing my designs to life, turning ideas into interactive, user-friendly experiences.</p>
          <p>I’m passionate about using technology to make human-computer interactions better.</p>
          <p>My goal is to create UIs that are not only visually appealing but also practical and easy to use. </p>
       </div>

       <div className='bento-card profile-img-box'></div>

       <div className='bento-card experience-box'><h5>Experience</h5></div>
       <div className='bento-card map-box'>
        <div className='map-marking'></div>
       </div>

       <div className='bento-card x-box'><h5>X</h5></div>
       <div className='bento-card linkdin-box'><h5>Linkedin</h5></div>
       <div className='bento-card tech-stack-box'><h5>Tech Stack</h5></div>
       <div className='bento-card tool-box'><h5>Tool box</h5></div>
       <div className='bento-card experimental-box'><h5>Experimantal</h5></div>
       <div className='bento-card thankyou-boy'><h5>Thank you</h5></div>
      </div>
      <Footer/>
      </motion.div>
  )
}

export default About