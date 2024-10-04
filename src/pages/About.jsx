import React from 'react'
import {motion} from 'framer-motion'
import Footer from '../components/Footer'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'
import Linkedin from '../icons/Linkedin'
import XDotCom from '../icons/XDotCom'
import { MdWork } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { PiHandsPrayingBold } from "react-icons/pi";
import { BiLogoNetlify } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";
import { MdDesignServices } from "react-icons/md";

const About = () => {
  return (
    <motion.div className='p-2 sm:p-4'>
      <motion.div className='top-blob-about'></motion.div>
      <motion.div className='top-grid-about'></motion.div>
      <motion.div  variants={textVariants} initial='initial' animate='animate'  className='about-grid-wrapper'>

      <motion.div  variants={textVariants} initial='initial' animate='animate' className='flex flex-col gap-10 sm:flex-row'>


        <motion.div variants={childVariants} className='bento-card '>

          <motion.h3 variants={childVariants} className='mb-8'>"I like to build what i design,"</motion.h3>
          <p className='mb-4'>I love bringing my designs to life, turning ideas into interactive, user-friendly experiences.
          I’m passionate about using technology to make human-computer interactions better.
          </p>
          <p className='mb-4'>My goal is to create UIs that are not only visually appealing but also practical and easy to use. </p>

       </motion.div>
       <motion.div variants={childVariants} className='bento-card intro-box'>
          <div className='about-image-1'>
          </div>
        </motion.div>
      </motion.div>

       {/* <div className='bento-card profile-img-box'>

       </div> */}

       <div className='flex flex-col sm:flex-row  bento-card gap-8 '>
          <div className='map-box'>
            <div className='map-marking'></div>
          </div>
          <div className='about-image-2'>

          </div>
        </div>


       <div className='bento-card experience-box'>
        <div className='flex text-[24px]  gap-4 items-center about-title'> <MdWork  size={18}/> <h6 className='text-[16px]'>Experience</h6> </div>
        <div className='flex flex-col experience-list'>
          <div className='experience-list-item'>
            <h5>Front-end Developer <span> ＠ Artificial Reality</span> </h5>
            <h6>➜ 2023 ―― Present</h6>
          </div>
          <div className='experience-list-item'>
            <h5>Web Developer & Designer <span> ＠ Freelance</span> </h5>
            <h6>➜ 2022 ―― 2023</h6>
          </div>
          <div className='experience-list-item'>
            <h5>Electronics Engineer<span> ＠ R.A.I.T., Navi Mumbai  </span> </h5>
            <h6>➜ passout 2022</h6>
          </div>
        </div>

        </div>

       <a className='bento-card linkdin-box'>
        {/* <Linkedin/> */}
        </a>

       {/* <div className='bento-card tech-stack-box'>
       <div className='flex gap-4 items-center  about-title'> <TiStarFullOutline size={18}/> <h6 className='text-[16px]' >Skills</h6> </div>
        <div className='flex  gap-4 sm:mt-1 '>
          <div className='tech-stack-list-item'>
            <div className='flex items-center gap-4 text-4xl'>
            <AiFillCode fill='#63E313' size={24}/> <h5 className='sm:text-sm md:text-2xl lg:text-3xl '>Web Dev </h5>
            </div>
            <h6>⤷ JavaScript</h6>
            <h6>⤷ Vite.js</h6>
            <h6>⤷ React.js</h6>
            <h6>⤷ Next.js</h6>
            <h6>⤷ Angular</h6>
            <h6>⤷ Jquery</h6>


          </div>
          <div className='tech-stack-list-item'>
            <div className='flex items-center gap-4 text-4xl'>
            <MdDesignServices fill='#2684FF' size={24}/> <h5 className='sm:text-sm md:text-2xl lg:text-3xl '>Design</h5>
            </div>
            <h6>⤷ Tailwind</h6>
            <h6>⤷ Shadcn</h6>
            <h6>⤷ SCSS </h6>
            <h6>⤷ Bootstrap</h6>
            <h6>⤷ PostCss</h6>
          </div>
          </div>
        </div> */}

       <div className='bento-card tools-box'>
         <div className='flex  gap-4 items-center  about-title'> <FaTools size={18}/> <h6 className='text-[16px]' >Tool Box</h6></div>
         <div className='flex flex-col gap-4 '>
            <div className='tool-box-grid'>
              <div className='flex flex-col items-center tools-box-items'>
                <div className='fancy-image-box figma-2 '></div>
                <h6>Figma</h6>
              </div>
              <div className='flex flex-col items-center tools-box-items'>
                <div className='fancy-image-box github '></div>
                <h6>GitHub</h6>
              </div>
              <div className='flex flex-col items-center tools-box-items'>
                <div className='fancy-image-box vscode '></div>
                <h6>Vscode</h6>
              </div>
              <div className='flex flex-col items-center tools-box-items'>
                <div className='fancy-image-box git '></div>
                <h6>Git</h6>
              </div>


           </div>
           <div className='tool-box-grid'>

              <div className='flex flex-col items-center tools-box-items'>
                <div className='fancy-image-box illustrator '></div>
                <h6>Illustrator</h6>
              </div>
              <div className='flex flex-col items-center tools-box-items'>
                <div className='fancy-image-box photoshop '></div>
                <h6>Photoshop</h6>
              </div>
              <div className='flex flex-col items-center tools-box-items'>
                <div className='fancy-image-box aftereffects '></div>
                <h6>After Effects</h6>
              </div>

           </div>

         </div>
        </div>


       <div className='bento-card thankyou-box'>
       <PiHandsPrayingBold  size={32}/>
        <h6>"Inspired by" <a href="https://www.perryw.ca/" target='_blank'>@perryw</a>, <a href="https://rauno.me/" target='_blank'>@rouno</a> and <a href="https://jrhu.me/" target='_blank'>@Jia</a> </h6>
       </div>

      </motion.div>

      <Footer/>
      </motion.div>
  )
}

export default About