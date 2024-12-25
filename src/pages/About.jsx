import React from 'react'
import {motion} from 'framer-motion'
import Footer from '../components/Footer'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'
import Linkedin from '../icons/Linkedin'
import XDotCom from '../icons/XDotCom'
import { MdWork } from "react-icons/md";

import { FaTools } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import { PiHandsPrayingBold } from "react-icons/pi";




const design = [
  {
    name: 'Figma',
    logo: '/assets/various/figma-logo.png',
    desc: 'Design & Prototyiping'
  },
  {
    name: 'Spline',
    logo: '/assets/various/spline-logo.png',
    desc: '3d Editor'
  },
  {
    name: 'Illustrator',
    logo: '/assets/various/ai-logo.png',
    desc: 'Vector Design Tool'
  },
  {
    name: 'Photoshop',
    logo: '/assets/various/ps-logo.png',
    desc: 'Image Editor'
  },
]

const webDev = [
  {
    name: 'JavaScript',
    logo: '/assets/various/js-logo.png',
    desc: 'Languages of the web'
  },
  {
    name: 'ReactJS',
    logo: '/assets/various/react-logo.png',
    desc: 'A JavaScript Library'
  },
  {
    name: 'Tailwind & SASS',
    logo: '/assets/various/tailwind-logo.png',
    desc: 'CSS Frameworks'
  },
  {
    name: 'NextJS',
    logo: '/assets/various/next-logo.svg',
    desc: 'React Framework'
  },
  {
    name: 'Angular',
    logo: '/assets/various/angular-logo.png',
    desc: 'JavaScript Framework'
  },
  {
    name: 'Redux',
    logo: '/assets/various/redux-logo.png',
    desc: 'State Managment'
  },
  {
    name: 'Git & GitHub',
    logo: '/assets/various/github-logo.png',
    desc: 'Version Control'
  },
  {
    name: 'Appwrite',
    logo: '/assets/various/appwrite-logo.png',
    desc: 'Backend tool'
  },
  {
    name: 'Supabase',
    logo: '/assets/various/supabase-logo.png',
    desc: 'Backend tool'
  },
]

const handleOpenResume = () => {
  // Replace 'your-resume.pdf' with the actual path to your resume file
  const resumeUrl = "https://drive.google.com/file/d/1gC-Gew05dzo0GINfC_zPwtVbggFt2adR/view?usp=sharing";
  window.open(resumeUrl, "_blank");
};

const About = () => {

  return (
    <motion.div className='p-2 sm:p-4'>
      <motion.div className='top-blob-about'></motion.div>
      <motion.div className='top-grid-about'></motion.div>
      <motion.div  variants={textVariants} initial='initial' animate='animate'  className='about-grid-wrapper'>

      <motion.div  variants={textVariants} initial='initial' animate='animate' className='flex flex-col gap-10'>

        <motion.div variants={childVariants} className='bento-card '>
          <p className='mb-4'>Hey, I’m <span className='about-text-span'>Shubham Yelekar</span>, a Front-end engineer who enjoys designing and coding.
          </p>
          <p className='mb-4'>I focus on creating easy-to-use and visually pleasing interfaces. I’m currently working at <span className='about-text-span'>Artificial Reality</span>, where I turn my designs into working applications.</p>
          <p>I like using tools like React.js, Next.js, and Figma to bring ideas to life.</p>

       </motion.div>

      </motion.div>

       <div className='bento-card profile-img-box'>

       </div>

       <div className='flex flex-col sm:flex-row  bento-card gap-8 '>
          <div className='map-box'>
            <div className='map-marking'></div>

          </div>
          <div className='about-image-2'>

          </div>
          <motion.div variants={childVariants} className='bento-card intro-box'>
          <div className='about-image-1'>
          </div>
        </motion.div>
        </div>

        <div>
        <button
          onClick={handleOpenResume}
          className="resume-button"
        >
          View Resume <HiDocumentText size={18}  />
        </button>
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


       <div className='bento-card tools-box'>
         <div className='flex  gap-4 items-center  about-title'> <FaTools size={18}/> <h6 className='text-[16px]' >Technologies and Tool Box</h6>
         </div>
         <div className='mt-8'>
            <h4>Web - Development</h4>
            <div className='mt-8 tech-box-grid'>

              {webDev.map((box, index)=>(
              <div key={index} className='tech-box flex gap-4'>
                <div className='logo-box'>
                  <img src={box.logo} alt="" />
                </div>
                <div>
                  <h6>{box.name}</h6>
                  <p>{box.desc}</p>
                </div>
              </div>
              ))}

            </div>
         </div>


         <div className='mt-8'>
            <h4>UI Design</h4>
            <div className='mt-8 tech-box-grid'>

              {design.map((box, index)=>(
              <div key={index} className='tech-box flex gap-4'>
                <div className='logo-box'>
                  <img src={box.logo} alt="" />
                </div>
                <div>
                  <h6>{box.name}</h6>
                  <p>{box.desc}</p>
                </div>
              </div>
              ))}

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