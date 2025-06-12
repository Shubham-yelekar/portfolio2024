import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import SEOHelmet from "../components/ui/SEOHelmet";
import ImageWrapper from "../components/ui/ImageWrapper";
import QuoteBlock from "../components/ui/QuoteBlock";
import CodeBlock from "../components/ui/CodeBlock";
import BlogFooter from "../components/ui/BlogFooter";
import { useData } from "../DataContext";
import { Another, Hello, SpaceTimeComplexity } from "../blog-posts";

const BlogPost = () => {
  const componentMap = {
    Hello,
    Another,
    SpaceTimeComplexity,
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
      <div class="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
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
          <header className="grid-pattern">
            <p className="blog-date">{date}</p>
            <h1 className="blog-title">{title}</h1>
          </header>
          <section className="blog-content">
            <Component />
          </section>
        </article>
      </MDXProvider>
      <BlogFooter />
    </div>
  );
};

export default BlogPost;
