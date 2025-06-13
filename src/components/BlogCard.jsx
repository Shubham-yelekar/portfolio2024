import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <motion.div initial="hidden" whileHover="visible">
      <Link to={`/blogs/${blog.slug}`} className="blog-link">
        <h5>{blog.title}</h5>
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, rotate: 12 },
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute z-0 object-cover w-32 rounded-lg md:w-72"
          src={blog.thumb}
          alt={`Image representing ${blog.name}`}
        />
        <p>{blog.date}</p>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
