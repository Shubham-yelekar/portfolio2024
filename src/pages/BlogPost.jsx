import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import SEOHelmet from "../components/ui/SEOHelmet";
import ImageWrapper from "../components/ui/ImageWrapper";
import QuoteBlock from "../components/ui/QuoteBlock";
import CodeBlock from "../components/ui/CodeBlock";
import { useData } from "../DataContext";
import { Another, Hello } from "../blog-posts";

const BlogPost = () => {
  const componentMap = {
    Hello,
    Another,
  };
  const { slug } = useParams();
  const { data } = useData(); // Correctly destructure the context data
  const [blog, setBlog] = useState(null);
  // Find the blog post based on the slug
  useEffect(() => {
    if (data?.blogPosts) {
      const blog = data?.blogPosts?.find((post) => post.slug === slug);
      setBlog({ ...blog, Component: componentMap[blog.Component] });
    }
  }, [data, slug]);
  if (!blog) {
    return (
      <div className="error-wrapper">
        <h1>404 - Blog Not Found</h1>
        <p>Sorry, the blog post you're looking for does not exist.</p>
      </div>
    );
  }

  const { Component, title, description, date } = blog;

  return (
    <div className="blog-post-wrapper max-w-[768px] m-auto">
      {/* SEO Helmet for dynamic meta tags */}
      <SEOHelmet title={title} description={description} />

      {/* Render blog content */}
      <MDXProvider
        components={{
          ImageWrapper,
          pre: CodeBlock,
          blockquote: QuoteBlock,
        }}
      >
        <article>
          <header>
            <h1 className="blog-title">{title}</h1>
            <p>{date}</p>
          </header>
          <section className="blog-content">
            <Component />
          </section>
        </article>
      </MDXProvider>
    </div>
  );
};

export default BlogPost;
