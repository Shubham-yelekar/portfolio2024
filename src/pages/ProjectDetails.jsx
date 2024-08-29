import React from 'react'
import { useParams } from 'react-router-dom'
// import {ArrowLeft }from '../icons/ArrowLeft';
import { Link } from 'react-router-dom';
import { color, motion } from 'framer-motion'
import textVariants from '../static/textVariants'
import childVariants from '../static/childVariants'
import Footer from '../components/Footer';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { IoReturnUpBack } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";

const projects = [
  { id: 1,
    name: 'Kalakar India Ace',
    url: 'https://kalakarindiaace.com/',
    description: 'Kalakar India ACE is a leading music studio and talent company in India, focused on nurturing and promoting artists. They offer music production, talent management, and artist promotion services, creating a collaborative platform for talents to excel.',
    thumbnail: ['/assets/projects/kalakar-india-ace/ss-1.png', '/assets/projects/kalakar-india-ace/ss-2.png',],
    services : ['Web Design', 'Web Development'],
    tech : ['React js', 'Tailwind', 'Framer'] },

  { id: 2,
     name: 'Apple Clone',
     url: 'https://kalakarindiaace.com/',
     description: 'Proven to increase developer productivity and accelerate the pace of software development.',
     thumbnail: ['/assets/projects/apple-website-clone/apple-image.jpg' ],
     services : ['Web Design', 'Web Development'],
     tech : ['React js', 'Tailwind', 'Framer']
    }
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
        <h5 className='max-w-[768px] w-full m-auto'>{project.description}</h5>
        <div className='dotted-line'></div>
        <div className='flex gap-4 justify-between mt-4 w-full'>
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
            <a href={project.url} target='_blank' className="link-button">
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



      <div className='navigation-buttons mt-4'>
        {prevProject && (
          <Link to={`/projects/${prevProject.id}`} className='prev-btn'>
            <RiArrowLeftSLine size={24} />
            <div>

            <p>Previous Project</p>
            <h5>{prevProject.name}</h5>
            </div>
          </Link>
        )}
        <div></div>
        {nextProject && (
          <Link to={`/projects/${nextProject.id}`} className='next-btn'>
            <div>
              <p>Next Project</p>
              <h5>{nextProject.name}</h5>
            </div><RiArrowRightSLine size={24} />
          </Link>
        )}
        </div>
      <Footer/>
    </motion.div>
  )
}

export default ProjectDetails