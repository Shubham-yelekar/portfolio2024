import React from 'react'
import {useTheme} from '../Theme-context'

const ToggleSwitch = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className='container'>
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
  )
}

export default ToggleSwitch