import React from 'react'
import XDotCom from '../icons/XDotCom'
import Github from '../icons/Github'
import Linkedin from '../icons/Linkedin'
import { motion } from 'framer-motion'
import textVariants from '../static/textVariants'

const navLinkVariant = {
  initial: {
    y: 5,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const SocialLinks = () => {
  return (
    <motion.div className='social-links' variants={textVariants} initial="initial" animate="animate">
          <motion.a className='link-box ' href="#" variants={navLinkVariant} initial="initial" animate="animate">
            <XDotCom/>
            {/* <span>username</span> */}
          </motion.a>
          <motion.a className='link-box' href="#" variants={navLinkVariant} initial="initial" animate="animate">
            <Linkedin/>
            {/* <span>username</span> */}
          </motion.a>
          <motion.a className='link-box' href="#" variants={navLinkVariant} initial="initial" animate="animate">
            <Github/>
            {/* <span>username</span> */}
          </motion.a>
        </motion.div>
  )
}

export default SocialLinks