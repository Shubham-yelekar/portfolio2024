import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import textVariants from '../static/textVariants';
import childVariants from '../static/childVariants';
import BlockContent from '@sanity/block-content-to-react';


import { client, urlFor } from '../sanity/client';


const Blogs = ({post}) => {

  const [blogs , setBlogs] = useState([])

  useEffect(()=>{
    const query = `*[_type == "post"]{ _id, title, slug, image, body }`

    client.fetch(query)
      .then((data)=>{
        setBlogs(data)
        console.log(blogs)
      })
  },[])



  return (
    <motion.div variants={textVariants} initial="initial" animate="animate" className='p-4'>
      <motion.div className='top-blob-archive'></motion.div>
      <motion.div className='top-grid-archive'></motion.div>
      <motion.div variants={childVariants} initial="initial" animate="animate"  className='title-wrapper'>
        <h3 className='text-center w-full'>Blogs</h3>
        <div className='dotted-line'></div>
      </motion.div>

    <motion.div>
      {blogs.map((blog,id)=>(
        <div key={id}>
          <img src={urlFor(blog.image)} alt="" />
          <h4>{blog.title}</h4>
          <p>
          <BlockContent blocks={blog.body} projectId={import.meta.env.VITE_SANITY_PROJECT_ID} dataset="production"/>
          </p>
        </div>
      ))}
    </motion.div>
    </motion.div>
  )
}



export default Blogs