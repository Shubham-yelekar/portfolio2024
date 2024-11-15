import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import textVariants from '../static/textVariants';
import childVariants from '../static/childVariants';

import Markdown from 'markdown-to-jsx';

const markdownOptions = {
  overrides: {
    h1: {
      props: {
        className: 'blog-content-h1',
      },
    },
    h2: {
      props: {
        className: 'blog-content-h2',
      },
    },
    h3: {
      props: {
        className: 'blog-content-h3',
      },
    },
    p: {
      props: {
        className: 'blog-content-p',
      },
    },
    ul: {
      props: {
        className: 'blog-content-ul',
      },
    },

    li: {
      props: {
        className: 'blog-content-ul',
      },
    },
    // Add more overrides as needed
  },
}

const Blog = () => {
  const [blogContent, setBlogContent] = useState('');

  useEffect(()=>{
   fetch("../../public/blog-data/case-study/case-study.md")
    .then(res => res.text())
    .then(text => setBlogContent(text))
    .catch(err => console.log(`Md file render error : ${err}`))
  }, [])

  return (
    <motion.div variants={textVariants} initial="initial" animate="animate" className='p-4'>
      <motion.div className='top-blob-archive'></motion.div>
      <motion.div className='top-grid-archive'></motion.div>
      <motion.div variants={childVariants} initial="initial" animate="animate"  className='title-wrapper'>
        <h3 className='text-center w-full'>Blogs</h3>
        <div className='dotted-line'></div>
      </motion.div>

      <div className='about-grid-wrapper blog-content'>
          <Markdown options={markdownOptions}>{blogContent}</Markdown>
      </div>
    </motion.div>
  )
}

export default Blog