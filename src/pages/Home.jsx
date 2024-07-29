import React from 'react'
import {motion} from 'framer-motion'
import MainLogo from '../icons/MainLogo'
import XDotCom from '../icons/XDotCom'
import Github from '../icons/Github'
import Linkedin from '../icons/Linkedin'
import Aurora from '../components/Aurora'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'


const Home = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <motion.div  variants={textVariants} initial='initial' animate='animate' className='hero-wrapper'>
        
        <motion.div variants={childVariants} className='flex gap-3'>
          <h1>Hi, I'am Shubham,</h1>
          <div className='profile-img'></div>
        </motion.div>
        <motion.div variants={childVariants}  className='flex gap-3'>
          <div className='terminal'></div>
          <h1>A Front-end</h1>
        </motion.div>
        <motion.div variants={childVariants} className='flex gap-3'>
          <h1>Developer & Designer</h1>
        <div className='figma'></div>
        </motion.div>
        <motion.div variants={childVariants} className='flex gap-3'>
          <div className='mumbai'></div>
          <h1>Based in Mumbai</h1>
        </motion.div>
        <motion.p variants={childVariants}>Currently work at <span className='highlight-text-italic'>Artificial Reality</span> </motion.p>
        <motion.p variants={childVariants}>I bring value to web development projects by merging <br/> technical expertise with creativity and aesthetics.</motion.p>
        {/* <div className='dotted-line'></div> */}
        {/* <div className='social-links'>
          <a className='link-box' href="#">
            <XDotCom/>
            <span>username</span>
          </a>
          <a className='link-box' href="#">
            <Linkedin/>
            <span>username</span>
          </a>
          <a className='link-box' href="#">
            <Github/>
            <span>username</span>
          </a>
        </div> */}

      </motion.div>
      {/* <Aurora/> */}
    </div>
  )
}

export default Home