import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import textVariants from '../static/textVariants';
import childVariants from '../static/childVariants';
import { BiLinkExternal } from "react-icons/bi";



const Projects = [
  {id:1, name: 'item-1', thumbnail: '/assets/archives/archive-1/thumb-1.jpg', video: '/assets/archives/archive-1/graph-slider-2.mp4', linkType: 'Read',link: '#'},
  {id:2, name: 'item-2', thumbnail: '/assets/archives/archive-2/thumb-2.jpg' ,video: '/assets/archives/archive-2/thumb-2.mp4',linkType: 'Demo', link: '#'},
]

const Archives = () => {
  return (
    <motion.div variants={textVariants} initial="initial" animate="animate" className='p-4'>
      <motion.div className='top-blob-archive'></motion.div>
      <motion.div className='top-grid-archive'></motion.div>
      <motion.div variants={childVariants} initial="initial" animate="animate"  className='title-wrapper'>
        <h3>Archives</h3>
        <p>These are all my recent works</p>
        <div className='dotted-line'></div>
      </motion.div>

      <div className='archive-wrapper'>

          {Projects.map((items)=>(
            <div key={items.id} className='archive-card'>
              {items.video ? (
                <video autoPlay muted playsInline loop src={items.video} alt={items.name}></video>
              ) : (
                <img src={items.thumbnail} alt={items.name} />
              )}
              <div className='archive-info'>
                <div>
                <h5>{items.name}</h5>
                <p>Lorem ipsum</p>
                </div>
                <a className="link-button">
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