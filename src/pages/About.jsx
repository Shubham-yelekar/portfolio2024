import React from 'react'
import {motion} from 'framer-motion'
import Footer from '../components/Footer'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'
import Linkedin from '../icons/Linkedin'
import XDotCom from '../icons/XDotCom'

const About = () => {
  return (
    <motion.div className='p-2 sm:p-4'>
      <motion.div className='top-blob-about'></motion.div>
      <motion.div className='top-grid-about'></motion.div>
      <motion.div  variants={textVariants} initial='initial' animate='animate'  className='about-grid-wrapper'>

        <motion.div variants={childVariants} className='bento-card intro-box'>
          <motion.h3 variants={childVariants}>"I like to build what i design,"</motion.h3>
          <p>I love bringing my designs to life, turning ideas into interactive, user-friendly experiences.
          I’m passionate about using technology to make human-computer interactions better.
          </p>
          <p>My goal is to create UIs that are not only visually appealing but also practical and easy to use. </p>
       </motion.div>

       <div className='bento-card profile-img-box'></div>

       <div className='bento-card experience-box'><h6>Experience</h6></div>
       <div className='bento-card map-box'>
        <div className='map-marking'></div>
       </div>

       <a href='#' className='bento-card x-box'><XDotCom/></a>
       <a className='bento-card linkdin-box'><Linkedin/></a>
       <div className='bento-card tech-stack-box'><h6>Tech Stack</h6></div>
       <div className='bento-card tool-box'><h6>Tool box</h6></div>
       <div className='bento-card experimental-box'><h6>Experimantal</h6></div>
       <div className='bento-card thankyou-boy'></div>

      </motion.div>

      <Footer/>
      </motion.div>
  )
}

export default About