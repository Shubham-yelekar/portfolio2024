import React from "react";
import { Link } from "react-router-dom";

const BlogFooter = () => {
  return (
    <div className="blog-footer">
      <Link className=" text-xl" to={"/blogs"}>
        More Blogs
      </Link>
    </div>
  );
};

export default BlogFooter;
