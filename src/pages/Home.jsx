import React from 'react'
import MainLogo from '../icons/MainLogo'
import XDotCom from '../icons/XDotCom'
import Github from '../icons/Github'
import Linkedin from '../icons/Linkedin'

const Home = () => {
  return (
    <div className='h-[100vh] bg-gradient-to-b from-gray-800 to-neutral-950'>
      <div className='hero-wrapper'>
        <div className='profile-img'>
          <MainLogo/>
        </div>
        <h1>Hey, I'am <span className='highlight-text-italic'>Jia.</span></h1>
        <h1><span className='highlight-text'>Developer</span> & <span className='highlight-text-italic'>Designer,</span></h1>
        <h1>currently a working at <span className='highlight-text-italic'>Vercel</span></h1>
        <p>Websites, software interfaces, icons — that’s where my heart is, dedicating my skills to perfecting these realms.</p>
        {/* <div className='dotted-line'></div> */}
        <h6 className='highlight-text-mono'>Connect with me ^ↀᴥↀ^</h6>
        <div className='social-links'>
          <a className='link-box' href="#">
            <XDotCom/>
            <span>username</span>
          </a>
          <a className='link-box' href="#">
            <Linkedin/>
            <span>username</span>
          </a>
          <a className='link-box' href="#">
            <Github/>
            <span>username</span>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Home