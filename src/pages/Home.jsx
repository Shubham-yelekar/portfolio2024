import React from 'react'
import {motion} from 'framer-motion'

import Aurora from '../components/Aurora'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'

const Home = () => {
  return (
    <motion.div variants={textVariants} initial='initial' animate='animate' className='flex justify-center items-center home-page overflow-hidden'>
      <motion.div className='top-blob-archive'></motion.div>
      <motion.div className='bot-blob-home'></motion.div>
      <motion.div  variants={textVariants} initial='initial' animate='animate' className='hero-wrapper'>
        <motion.div variants={childVariants} className='flex gap-[8px] '>
          <h1>Hi, I'm Shubham,</h1>
          <div className='fancy-image-box profile-img'></div>
        </motion.div>
        <motion.div variants={childVariants}  className='flex gap-[8px] xm:gap-[8px]'>
          <div className='fancy-image-box terminal'></div>
          <h1>A Front-end</h1>
        </motion.div>
        <motion.div variants={childVariants} className='flex gap-[8px] '>
          <h1>Developer & Designer</h1>
        <div className='fancy-image-box figma'></div>
        </motion.div>
        <motion.div variants={childVariants} className='flex gap-[8px] '>
          <div className='fancy-image-box mumbai'></div>
          <h1>Based in Mumbai</h1>
        </motion.div>
        <motion.div variants={childVariants} className='dotted-line'></motion.div>
        <motion.p variants={childVariants}>Currently work at <span className='highlight-text-italic'>Artificial Reality</span> </motion.p>
        <motion.p variants={childVariants}>This is my online spot where I show what I make and do.You can see my finished work, things I'm still working on, and stuff I'm learning about.</motion.p>


      </motion.div>

      {/* <Aurora/> */}
    </motion.div>
  )
}

export default Home