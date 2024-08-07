import React from 'react'
import {motion} from 'framer-motion'

import Aurora from '../components/Aurora'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'

const Home = () => {
  return (
    <div className='flex justify-center items-center home-page'>
      <motion.div  variants={textVariants} initial='initial' animate='animate' className='hero-wrapper'>

        <motion.div variants={childVariants} className='flex gap-[4px] '>
          <h1>Hi, I'm Shubham,</h1>
          <div className='profile-img'></div>
        </motion.div>
        <motion.div variants={childVariants}  className='flex gap-[4px] '>
          <div className='terminal'></div>
          <h1>A Front-end</h1>
        </motion.div>
        <motion.div variants={childVariants} className='flex gap-[4px] '>
          <h1>Developer & Designer</h1>
        <div className='figma'></div>
        </motion.div>
        <motion.div variants={childVariants} className='flex gap-[4px] '>
          <div className='mumbai'></div>
          <h1>Based in Mumbai</h1>
        </motion.div>
        <motion.div variants={childVariants} className='dotted-line'></motion.div>
        <motion.p variants={childVariants}>Currently work at <span className='highlight-text-italic'>Artificial Reality</span> </motion.p>
        <motion.p variants={childVariants}>This is my online spot where I show what I make and do.You can see my finished work, things I'm still working on, and stuff I'm learning about.</motion.p>


      </motion.div>

      <Aurora/>
    </div>
  )
}

export default Home