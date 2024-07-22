import React from 'react'
import {motion} from 'framer-motion'
import MainLogo from '../icons/MainLogo'
import XDotCom from '../icons/XDotCom'
import Github from '../icons/Github'
import Linkedin from '../icons/Linkedin'
import Aurora from '../components/Aurora'

const textVariants = {
  initial: {
    opacity: 0,
    filter: "blur(5px)"
  },
  animate: {
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
        ease: [0.75,0,.36,1]
    }
  }
}

const Home = () => {
  return (
    <div className='h-[100vh]'>
      <motion.div  variants={textVariants} initial='initial' animate='animate' className='hero-wrapper'>
        <div className='profile-img'>
          <MainLogo/>
        </div>
        <h1>Hey, I'am <span className='highlight-text-italic'>Jia.</span></h1>
        <h1><span className='highlight-text'>Developer</span> & <span className='highlight-text-italic'>Designer,</span></h1>
        <h1>currently a working at <span className='highlight-text-italic'>Vercel</span></h1>
        <p>Websites, software interfaces, icons — that’s where my heart is, dedicating my skills to perfecting these realms.</p>
        {/* <div className='dotted-line'></div> */}
        <h6 className='highlight-text-mono'>Connect with me ^ↀᴥↀ^</h6>
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
      <Aurora/>
    </div>
  )
}

export default Home