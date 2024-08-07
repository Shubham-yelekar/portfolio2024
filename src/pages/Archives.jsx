import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import textVariants from '../static/textVariants';
import childVariants from '../static/childVariants';


const Projects = [
  {id:1, name: 'item-1', thumbnail: '/assets/archives/archive-1/thumb-1.jpg', video: '/assets/archives/archive-1/graph-slider-2.mp4'},
  {id:2, name: 'item-2', thumbnail: '/assets/archives/archive-2/thumb-2.jpg' ,video: '/assets/archives/archive-2/thumb-2.mp4'},
]

const Archives = () => {
  return (
    <motion.div variants={textVariants} initial="initial" animate="animate" className='p-4'>

      <motion.div variants={childVariants} initial="initial" animate="animate"  className='title-wrapper'>
        <h2>Archives</h2>
        <p>These are all my recent works</p>
        <div className='dotted-line'></div>
      </motion.div>

      <div className='archive-wrapper'>

          {Projects.map((items)=>(
            <div key={items.id} className='archive-card'>
              {items.video ? (
                <video autoPlay muted playsInline src={items.video} alt={items.name}></video>
              ) : (
                <img src={items.thumbnail} alt={items.name} />
              )}
              <div className='archive-info'>
                <h4>{items.name}</h4>
              </div>
            </div>

          ))}
      </div>
    </motion.div>
  )
}

export default Archives