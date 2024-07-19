import React from 'react'
import { useParams } from 'react-router-dom'

const projects = [
  { id: 1, name: 'Project One', description: 'Description of Project One', thumbnail: '/src/assets/Project-1/thumb-1.jpg' },
  { id: 2, name: 'Project Two', description: 'Description of Project Two', thumbnail: '/src/assets/Project-1/thumb-1.jpg' },
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
      <div className='project-detail'>
        <h2>{project.name}</h2>
        <img src={project.thumbnail} alt={project.name} />
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectDetails