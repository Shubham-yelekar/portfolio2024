import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.slug}`} className="blog-link">
      <h6>{blog.title}</h6>
      <p>{blog.date}</p>
    </Link>
  );
};

export default BlogCard;
