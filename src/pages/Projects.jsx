import React from 'react'
import {Link} from 'react-router-dom'

const projects = [
  {id:1, name: 'Projects One', thumbnail: '/public/Project-1/thumb-1.jpg'},
  {id:1, name: 'Projects Two', thumbnail: '/public/Project-2/thumb-2.jpg'},
]

const Projects = () => {
  return (
    <div className='p-4'>
      <div className='title-wrapper'>
        <h2>Projects</h2>
        <p>These are all my recent works</p>
      </div>
      <div className='projects-wrapper'>
      {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className='project-card'>
            <div className='bg-gray-800 h-[650px]'>
              <img src={project.thumbnail} alt={project.name} />
              <div className='project-info'>
                <h3>{project.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects