import React from 'react'
import {Link} from 'react-router-dom'

const projects = [
  { id: 1, name: 'Kalakar India Ace', description: 'Description of Project One', thumbnail: '/assets/projects/kalakar-india-ace/hero-image.jpg' },
  { id: 2, name: 'Apple Clone', description: 'Description of Project Two', thumbnail: '/assets/projects/apple-website-clone/apple-image.jpg' },
  { id: 3, name: 'Portfolio 1.0', description: 'Description of Project One', thumbnail: '/assets/projects/portfolio-1/thumb-1.jpg' },
]

const Projects = () => {
  return (
    <div className='p-4'>
      <div className='title-wrapper'>
        <h2>Projects</h2>
        <p>Websites, software interfaces, icons — that’s where my heart is, <br /> dedicating my skills to perfecting these realms.</p>
      </div>
      <div className='projects-wrapper'>
      {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className='project-card '>

                <img src={project.thumbnail} alt={project.name} />
              <div className='project-info'>
                <h3>{project.name}</h3>
              </div>

          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects