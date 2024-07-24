import React from 'react'
import {NavLink} from 'react-router-dom'
import ToggleSwitch from './ToggleSwitch'

const Navbar = () => {
  const linkClass = ({isActive}) => isActive ?"activeLink" : ""

  return (
    <nav>
      <ul>
        <li className='nav-link'>
          <NavLink className={linkClass} to={'/'}>Home</NavLink>
        </li>
        <li className='nav-link'>
          <NavLink className={linkClass} to={'/projects'}>Projects</NavLink>
        </li>
        <li className='nav-link'>
          <NavLink className={linkClass} to={'/archives'}>Archives</NavLink>
        </li>
        <li className='nav-link'>
          <NavLink className={linkClass} to={'/about'}>About</NavLink>
        </li>
        <ToggleSwitch/>
      </ul>

    </nav>
  )
}

export default Navbar