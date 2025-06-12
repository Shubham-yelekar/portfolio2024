import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHelmet = ({ title, description, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <script src="https://cdn.jsdelivr.net/gh/eddymens/markdown-external-link-script@v2.0.0/main.min.js"></script>
      <meta name="title" content="Shubham Yelekar | Front End Developer" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://shubhamyelekar.vercel.app/blogs/space-time-complexity"
      />
      ''
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://shubhamyelekar.vercel.app/blogs/space-time-complexity"
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHelmet;
