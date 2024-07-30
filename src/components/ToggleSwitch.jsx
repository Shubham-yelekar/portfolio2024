import React from 'react'
import {useTheme} from '../Theme-context'
import { motion } from 'framer-motion'
import textVariants from '../static/textVariants'


const ToggleSwitch = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <motion.div variants={textVariants} initial="initial" animate="animate" className='toggle-wrapper' >
      <h6>Mode : <strong>{theme}</strong></h6>
      <div variants={textVariants} initial="initial" animate="animate" className='toggle-container'>
        <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
        className='checkbox'
        id='checkbox'/>
        <label htmlFor="checkbox" className='switch'>
          <span className='slider'></span>
        </label>
      </div>
    </motion.div>
  )
}

export default ToggleSwitch