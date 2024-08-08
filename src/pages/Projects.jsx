import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'

const projects = [
  { id: 1, name: 'Kalakar India Ace', description: 'Description of Project One', thumbnail: '/assets/projects/kalakar-india-ace/hero-image.jpg' },
  { id: 2, name: 'Apple Clone', description: 'Description of Project Two', thumbnail: '/assets/projects/apple-website-clone/apple-image.jpg' },
  { id: 3, name: 'Portfolio 1.0', description: 'Description of Project One', thumbnail: '/assets/projects/portfolio-1/thumb-1.jpg' },
  { id: 4, name: 'Project', description: 'Description of Project One', thumbnail: '/assets/projects/project-1/thumb-1.jpg' }
]

const Projects = () => {
  return (
    <motion.div variants={textVariants} initial="initial" animate="animate" className='p-4'>
      <motion.div className='top-blob-projects'></motion.div>
      <motion.div variants={childVariants} className='title-wrapper'>
        <h2>Projects</h2>
        <p>Websites, software interfaces, icons — that’s where my heart is,dedicating my skills to perfecting these realms.</p>
      </motion.div>
      <motion.div variants={textVariants} initial="initial" animate="animate" className='projects-wrapper'>
      {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className='project-card '>

                <img src={project.thumbnail} alt={project.name} />
              <div className='project-info'>
                <h3>{project.name}</h3>
              </div>

          </Link>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects