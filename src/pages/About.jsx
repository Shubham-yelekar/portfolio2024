import React from 'react'
import {motion} from 'framer-motion'
import Footer from '../components/Footer'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'
import Linkedin from '../icons/Linkedin'
import XDotCom from '../icons/XDotCom'
import { MdWork } from "react-icons/md";

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

       <div className='bento-card experience-box'>
        <div className='flex gap-2 about-title'> <MdWork  size={24}/> <h6>Experience</h6> </div>
        <div className='flex gap-8 experience-list'>
          <div className='experience-list-item'>
            <h5>Front-end Developer <span> ＠ Artificial Reality</span> </h5>
            <h6>2023 - Present</h6>
          </div>


        </div>

        </div>
       <div className='bento-card map-box'>
        <div className='map-marking'></div>
       </div>

       <a href='#' className='bento-card x-box'><XDotCom/></a>
       <a className='bento-card linkdin-box'><Linkedin/></a>
       <div className='bento-card tech-stack-box'><h6>Tech Stack</h6></div>
       <div className='bento-card tool-box'><h6>Tool box</h6></div>

       <div className='bento-card thankyou-box'>
        Thank you For visiting the website
       </div>

      </motion.div>

      <Footer/>
      </motion.div>
  )
}

export default About