import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import textVariants from "../static/textVariants";
import childVariants from "../static/childVariants";
import { BiLinkExternal } from "react-icons/bi";
import Footer from "../components/Footer";
import { useData } from "../DataContext"; //

const Archives = () => {
  const [archivePost, setArchivePost] = useState([]);
  const { data, loading } = useData();

  useEffect(() => {
    if (data?.archive) {
      setArchivePost(data.archive);
    }
  }, [data]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (!archivePost.length) {
    return <p>No Archives found</p>;
  }
  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="p-4"
    >
      <motion.div className="top-blob-archive"></motion.div>
      <motion.div className="top-grid-archive"></motion.div>
      <motion.div
        variants={childVariants}
        initial="initial"
        animate="animate"
        className="title-wrapper"
      >
        <h3 className="text-center w-full">Archives</h3>
        <div className="dotted-line"></div>
      </motion.div>
      <div className="archive-wrapper">
        <div className="archive-major-wrapper">
          {archivePost.map((items, index) => (
            <div key={index} className="archive-card">
              {items.video ? (
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  src={items.video}
                  alt={items.name}
                ></video>
              ) : (
                <img src={items.thumbnail} alt={items.name} />
              )}
              <div className="archive-info">
                <div>
                  <h5>{items.name}</h5>
                  <p>{items.description}</p>
                </div>
                <a href={items.link} target="_blank" className="link-button">
                  <span>{items.linkType}</span> <BiLinkExternal size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="archive-mini-wrapper">
          {archivePost.map((items, index) => (
            <div key={index} className="archive-card">
              {items.video ? (
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  src={items.video}
                  alt={items.name}
                ></video>
              ) : (
                <img src={items.thumbnail} alt={items.name} />
              )}
              <div className="archive-info">
                <div>
                  <h5>{items.name}</h5>
                  <p>{items.description}</p>
                </div>
                <a href={items.link} target="_blank" className="link-button">
                  <span>{items.linkType}</span> <BiLinkExternal size={18} />
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <Footer />
    </motion.div>
  );
};

export default Archives;
