import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import textVariants from '../static/textVariants';
import childVariants from '../static/childVariants';
import { BiLinkExternal } from "react-icons/bi";



// const Projects = [
//   {id:1, name: 'Shiny Animated Button',description:"React.js , Tailwind CSS & Framer Motion  ", thumbnail: '/assets/archives/archive-1/thumb-1.jpg', video: '/assets/archives/shiny-button/shiny-button.mp4', linkType: 'Demo',link: 'https://shiny-animated-button.netlify.app/'},

// ]

const Archives = () => {

  const [archivePost , setArchivePost] = useState([])

  useEffect(() => {
    fetch('https://shubham-yelekar.github.io/projects-json/projects.json')
      .then(res => res.json())
      .then(data => {
      setArchivePost(data.archive)
        console.log(archivePost)
      })

      .catch(error => console.error("Error fetch json", error))

  }, [])


  return (
    <motion.div variants={textVariants} initial="initial" animate="animate" className='p-4'>
      <motion.div className='top-blob-archive'></motion.div>
      <motion.div className='top-grid-archive'></motion.div>
      <motion.div variants={childVariants} initial="initial" animate="animate"  className='title-wrapper'>
        <h3 className='text-center w-full'>Archives</h3>
        <div className='dotted-line'></div>
      </motion.div>

      <div className='archive-wrapper'>

          {archivePost.map((items)=>(
            <div key={items.id} className='archive-card'>
              {items.video ? (
                <video autoPlay muted playsInline loop src={items.video} alt={items.name}></video>
              ) : (
                <img src={items.thumbnail} alt={items.name} />
              )}
              <div className='archive-info'>
                <div>
                <h5>{items.name}</h5>
                <p>{items.description}</p>
                </div>
                <a href={items.link} target='_blank' className="link-button">
                 <span>{items.linkType}</span>  <BiLinkExternal size={18} />
                </a>
              </div>
            </div>

          ))}
      </div>
    </motion.div>
  )
}

export default Archives