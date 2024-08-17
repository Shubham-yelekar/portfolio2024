import React from 'react'
import { useParams } from 'react-router-dom'
// import {ArrowLeft }from '../icons/ArrowLeft';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'
import Footer from '../components/Footer';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { IoReturnUpBack } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";

const projects = [
  { id: 1,
    name: 'Kalakar India Ace',
    description: 'Description of Project One',
    thumbnail: ['/assets/projects/kalakar-india-ace/hero-image.jpg', '/assets/projects/kalakar-india-ace/hero-image.jpg', '/assets/projects/kalakar-india-ace/hero-image.jpg'],
    services : ['Web Design', 'Web Development'],
    tech : ['React js', 'Tailwind', 'Framer'] },

  { id: 2,
     name: 'Apple Clone',
     description: 'Description of Project Two',
     thumbnail: ['/assets/projects/apple-website-clone/hero-image' ],
     services : ['Web Design', 'Web Development'],
     tech : ['React js', 'Tailwind', 'Framer']
    },
];

const ProjectDetails = () => {
  const {id} = useParams();
  const projectId = parseInt(id);
  const project = projects.find((p)=> p.id === parseInt(id));


  if(!project){
    return <div>Project Not found</div>
  }

  const currentIndex = projects.findIndex((p)=> p.id === projectId);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1]

  return (
    <motion.div  variants={textVariants} initial="initial" animate="animate" className='p-4'>
      <motion.div variants={childVariants} className='title-wrapper'>
        <Link to="/projects" className='back-btn' ><IoReturnUpBack size={18} /> Back</Link>
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
              Visit <BiLinkExternal size={18} />
            </a>
          </div>
      </div>
      </motion.div>

      <motion.div variants={childVariants} className='project-detail-grid'>
      {project.thumbnail?.map((item, index) => (
          <img key={index} src={item} alt={`${project.name} - Image ${index + 1}`} />
        ))}
      </motion.div>
        <div className='navigation-buttons'>
        {prevProject && (
          <Link to={`/projects/${prevProject.id}`} className='prev-btn'>
            <RiArrowLeftSLine size={24} /> Previous Project
          </Link>
        )}
        {nextProject && (
          <Link to={`/projects/${nextProject.id}`} className='next-btn'>
            Next Project <RiArrowRightSLine size={24} />
          </Link>
        )}
        </div>
      <Footer/>
    </motion.div>
  )
}

export default ProjectDetails