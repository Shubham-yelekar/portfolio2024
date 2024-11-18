import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ToggleSwitch from '../components/ToggleSwitch';
import SocialLinks from '../components/SocialLinks';
import ScrollToTop from '../utils/ScrollToTop';


const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <ScrollToTop/>
      <ToggleSwitch/>
      <SocialLinks/>
    </>
  )
}

export default MainLayout