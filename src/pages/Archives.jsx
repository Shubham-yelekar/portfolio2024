import React from 'react'
import {Link} from 'react-router-dom'

const Projects = [
  {id:1, name: 'item-1', thumbnail: '/assets/archives/archive-1/thumb-1.jpg', video: '/assets/archives/archive-1/graph-slider-2.mp4'},
  {id:2, name: 'item-2', thumbnail: '/assets/archives/archive-2/thumb-2.jpg'},
]

const Archives = () => {
  return (
    <div className='p-4'>

      <div className='title-wrapper'>
        <h2>Archives</h2>
        <p>These are all my recent works</p>
        <div className='dotted-line'></div>
      </div>

      <div className='archive-wrapper'>

          {Projects.map((items)=>(
            <div key={items.id} className='archive-card'>
              {items.video ? (
                <video autoPlay muted  src={items.video} alt={items.name}></video>
              ) : (
                <img src={items.thumbnail} alt={items.name} />
              )}
              <h1>{items.name}</h1>
            </div>

          ))}
      </div>
    </div>
  )
}

export default Archives