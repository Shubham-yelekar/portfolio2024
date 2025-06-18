import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div>
      <Link to={`/blogs/${blog.slug}`} className="blog-link">
        <motion.img
          className="object-cover rounded-lg"
          src={blog.thumb}
          alt={`Image representing ${blog.name}`}
        />
        <div>

        <h5>{blog.title}</h5>
        <p>{blog.date}</p>
        </div>
        <div className="bar"></div>
      </Link>
    </div>
  );
};

export default BlogCard;
