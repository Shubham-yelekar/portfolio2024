import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ToggleSwitch from '../components/ToggleSwitch';
import SocialLinks from '../components/SocialLinks';


const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <ToggleSwitch/>
      <SocialLinks/>
    </>
  )
}

export default MainLayout