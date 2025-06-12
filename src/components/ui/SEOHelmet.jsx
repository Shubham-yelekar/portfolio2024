import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHelmet = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <script src="https://cdn.jsdelivr.net/gh/eddymens/markdown-external-link-script@v2.0.0/main.min.js"></script>
    </Helmet>
  );
};

export default SEOHelmet;
