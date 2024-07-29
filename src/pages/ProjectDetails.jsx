import React from 'react'
import { useParams } from 'react-router-dom'

const projects = [
  { id: 1, name: 'Kalakar India Ace', description: 'Description of Project One', thumbnail: '/assets/projects/kalakar-india-ace/hero-image' },
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
    <div className='p-4'>
      <div className='title-wrapper'>

        <h2>{project.name}</h2>
      </div>
      <div className='project-detail'>
        <img src={project.thumbnail} alt={project.name} />
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectDetails