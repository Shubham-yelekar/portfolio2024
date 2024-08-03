import React from 'react'
import {motion} from 'framer-motion'
import Spline from '@splinetool/react-spline';
const Aurora = () => {
  const textVariants2 = {
    initial: {
      opacity: 0,
      filter: "blur(5px)"
    },
    animate: {
        filter: "blur(0px)",
        opacity: 1,
        transition: {
          duration: 1.4,
          staggerChildren: 0.5,
          ease: [0.75,0,.36,1]
      }
    }
  }
  return (
    <motion.div  variants={textVariants2} initial='initial' animate='animate' className='canvas-el'>
      {/* <Spline scene="https://prod.spline.design/yNUFGxG1JxZGMiCU/scene.splinecode" /> */}
      <Spline scene="https://prod.spline.design/20mldG2STaXyfmBH/scene.splinecode" />
      {/* <Spline scene="https://prod.spline.design/BfKARC7NytCMM6m3/scene.splinecode" /> */}
    </motion.div>
  )
}

export default Aurora