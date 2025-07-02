import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import textVariants from "../static/textVariants";
import childVariants from "../static/childVariants";
import Footer from "../components/Footer";
import { useData } from "../DataContext";
import { BiLinkExternal } from "react-icons/bi";
const Projects = () => {
  const [projects, SetProjects] = useState([]);
  const { data, loading } = useData();
  const [archivePost, setArchivePost] = useState([]);
  useEffect(() => {
    if (data?.projectList) {
      SetProjects(data.projectList);
    }
    if (data?.archive) {
      setArchivePost(data.archive.reverse());
    }
  }, [data]);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="p-2 sm:p-4"
    >
      <motion.div className="top-blob-projects"></motion.div>
      <motion.div className="top-grid-projects"></motion.div>

      <motion.div variants={childVariants} className="title-wrapper">
        <h3 className="text-center w-full">Featured Projects</h3>
        <div className="dotted-line"></div>
      </motion.div>

      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="projects-wrapper"
      >
        {projects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="project-card"
          >
            {/* <div className="project-info">
              <h4>{project.name}</h4>
              <h6 className="tech-used">{project.tech}</h6>
              <p>{project.description}</p>
            </div> */}
            <div className="project-card-images">
              <img src={project.thumbnail} alt={project.name} />
            </div>
            <div className="project-info">
              <div className="project-info-title">
                <h4>{project.name}</h4>
                <h6 className="tech-used">{project.tech}</h6>
              </div>
              <div className="project-info-description">
                <p>{project.description}</p>
              </div>
            </div>
            {/* <div
              className="project-card-image"
              style={{
                backgroundImage: `url(${project.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            ></div> */}
          </Link>
        ))}
      </motion.div>
      <div className="archive-wrapper">
        <motion.div variants={childVariants} className="title-wrapper">
          <h4 className="text-center">Mini Projects</h4>
          <p className="text-center">
            Trying to learn new technologies , experiments and ui exploration.
          </p>
        </motion.div>
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
      </div>
      <Footer />
    </motion.div>
  );
};

export default Projects;
