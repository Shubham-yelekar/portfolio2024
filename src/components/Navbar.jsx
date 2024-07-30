import React from 'react'
import {NavLink} from 'react-router-dom'
import ToggleSwitch from './ToggleSwitch'
import {motion} from 'framer-motion'

const navVariant = {
  initial: {
    y:100,
    x:'-50%',
    opacity: 0,
  },
  animate: {
      y:0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        ease: [0.75,0,.36,1]
    }
  }
}

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

const Navbar = () => {
  const linkClass = ({isActive}) => isActive ?"activeLink" : ""

  return (
    <motion.div className='nav' initial="initial" animate="animate" variants={navVariant}>
      <ul>
        <motion.li className='nav-link' variants={navLinkVariant}  >
          <NavLink className={linkClass} to={'/'}>Home</NavLink>
        </motion.li>
        <motion.li className='nav-link' variants={navLinkVariant}  >
          <NavLink className={linkClass} to={'/projects'}>Projects</NavLink>
        </motion.li>
        <motion.li className='nav-link' variants={navLinkVariant} >
          <NavLink className={linkClass} to={'/archives'}>Archives</NavLink>
        </motion.li>
        <motion.li className='nav-link' variants={navLinkVariant} >
          <NavLink className={linkClass} to={'/about'}>About</NavLink>
        </motion.li>
        <ToggleSwitch/>
      </ul>

    </motion.div>
  )
}

export default Navbar