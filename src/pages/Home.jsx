import React from 'react'
import {motion} from 'framer-motion'
import MainLogo from '../icons/MainLogo'
import XDotCom from '../icons/XDotCom'
import Github from '../icons/Github'
import Linkedin from '../icons/Linkedin'
import Aurora from '../components/Aurora'
import textVariants from '../static/textVariants'


const Home = () => {
  return (
    <div className='h-[100vh]'>
      <motion.div  variants={textVariants} initial='initial' animate='animate' className='hero-wrapper'>
        
        <h1>Hi, I'am <span className='highlight-text-italic'>Shubham,</span><div className='profile-img'>
          <MainLogo/>
        </div></h1>
        <h1>A Front-end</h1>
        <h1>Developer and Designer</h1>
        <h1>Based in Mumbai</h1>
        <p>Currently work at Artificial Reality</p>
        <p>I bring value to web development projects by merging <br/> technical expertise with creativity and aesthetics.</p>
        {/* <div className='dotted-line'></div> */}
        <div className='social-links'>
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
        </div>

      </motion.div>
      {/* <Aurora/> */}
    </div>
  )
}

export default Home