import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import textVariants from "../static/textVariants";
import childVariants from "../static/childVariants";
import Footer from "../components/Footer";
import { useData } from "../DataContext";

const Projects = () => {
  const [projects, SetProjects] = useState([]);
  const { data, loading } = useData();

  useEffect(() => {
    if (data?.projectList) {
      SetProjects(data.projectList);
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
        <h3 className="text-center w-full">Projects</h3>
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
            className="project-card "
          >
            <div className="project-info">
              <h4>{project.name}</h4>
              <h6 className="tech-used">{project.tech}</h6>
              <p>{project.description}</p>
            </div>
            {/* <img src={project.thumbnail} alt={project.name} /> */}
            <div
              className="project-card-image"
              style={{
                backgroundImage: `url(${project.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
        ))}
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Projects;
