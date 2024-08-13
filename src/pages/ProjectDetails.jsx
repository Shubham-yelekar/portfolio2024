import React from 'react'
import { useParams } from 'react-router-dom'
import ArrowLeft from '../icons/ArrowLeft';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'

const projects = [
  { id: 1,
    name: 'Kalakar India Ace',
    description: 'Description of Project One',
    thumbnail: ['/assets/projects/kalakar-india-ace/hero-image.jpg', '/assets/projects/kalakar-india-ace/hero-image.jpg', '/assets/projects/kalakar-india-ace/hero-image.jpg'],
    services : ['Web Design', 'Web Development'],
    tech : ['React js', 'Tailwind', 'Framer'] },
  { id: 2, name: 'Apple Clone', description: 'Description of Project Two', thumbnail: '/assets/projects/apple-website-clone/hero-image' },
  { id: 3, name: 'Project One', description: 'Description of Project One', thumbnail: '/assets/projects/project-1/thumb-1.jpg' },
  { id: 4, name: 'Project Two', description: 'Description of Project Two', thumbnail: '/assets/projects/project-2/thumb-2.jpg' },
  // Add more projects as needed
];

const ProjectDetails = () => {
  const {id} = useParams();
  const project = projects.find((p)=> p.id === parseInt(id));


  if(!project){
    return <div>Project Not found</div>
  }
  return (
    <motion.div  variants={textVariants} initial="initial" animate="animate" className='p-4'>
      <motion.div variants={childVariants} className='title-wrapper'>
        <Link to="/projects" className='back-btn' >Back</Link>
        <h2>{project.name}</h2>
        <div className='flex gap-4 justify-between mt-4'>
          <div className='project-detail-points'>
            <h6>Service</h6>
            <ul>

            {project.services?.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className='project-detail-points'>
            <h6>Technology</h6>
            <ul>
            {project.tech?.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className='project-detail-points items-start'>
            <a className="link-button">
              Visit

            </a>
          </div>
      </div>
      </motion.div>

      <motion.div variants={childVariants} className='project-detail-grid'>
      {project.thumbnail?.map((item, index) => (
          <img key={index} src={item} alt={`${project.name} - Image ${index + 1}`} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetails