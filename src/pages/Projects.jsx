import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'
import Footer from '../components/Footer'

const projects = [
  { id: 1,
    name: 'Kalakar India Ace',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    thumbnail: '/assets/projects/kalakar-india-ace/thumb-image-desktop.png',
    tech : 'Web Developement, Web Sesign'
   },
  { id: 2, name: 'Apple Clone',
    description: 'Description of Project Two',
    thumbnail: '/assets/projects/apple-website-clone/apple-image.jpg',
     tech : 'Web Developement, Web Sesign'
  },
  { id: 3, name: 'Portfolio 1.0', description: 'Description of Project One', thumbnail: '/assets/projects/portfolio-1/thumb-1.jpg' },
  { id: 4, name: 'Project', description: 'Description of Project One', thumbnail: '/assets/projects/project-1/thumb-1.jpg' }
]

const Projects = () => {
  return (
    <motion.div variants={textVariants} initial="initial" animate="animate" className='p-2 sm:p-4'>
      <motion.div className='top-blob-projects'></motion.div>
      <motion.div className='top-grid-projects'></motion.div>
      <motion.div variants={childVariants} className='title-wrapper'>
        <h2>Projects</h2>
        <p>Websites, software interfaces, icons — that’s where my heart is,dedicating my skills to perfecting these realms.</p>
      </motion.div>
      <motion.div variants={textVariants} initial="initial" animate="animate" className='projects-wrapper'>
      {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className='project-card '>

            <div className='project-info'>
                <h3>{project.name}</h3>
                <h5 className='tech-used'>{project.tech}</h5>
                <p>{project.description}</p>
            </div>
            {/* <img src={project.thumbnail} alt={project.name} /> */}
            <div className='project-card-image'style={{
                backgroundImage: `url(${project.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
              }}>
            </div>


          </Link>
        ))}
      </motion.div>
      <Footer/>
    </motion.div>
  )
}

export default Projects