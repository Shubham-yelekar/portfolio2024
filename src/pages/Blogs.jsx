import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { useData } from "../DataContext";

const Blogs = () => {
  const { data } = useData(); // Fetch data from context
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    if (data?.blogPosts) {
      setBlogPosts(data.blogPosts); // Update state when `data.blogPosts` changes
    }
  }, [data]);

  return (
    <div className="blogs-wrapper">
      <div className="title-wrapper">
        <h3 className="text-center w-full">All Blogs</h3>
        <div className="dotted-line"></div>
      </div>
      <div className="max-w-[768px] m-auto">
        {blogPosts.length > 0 ? (
          blogPosts.map((post, index) => <BlogCard blog={post} key={index} />)
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
