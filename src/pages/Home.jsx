import React from "react";
import { motion } from "framer-motion";

import textVariants from "../static/textVariants";
import childVariants from "../static/childVariants";

const Home = () => {
  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="flex justify-center items-center home-page overflow-hidden"
    >
      <motion.div className="top-blob-archive"></motion.div>
      <motion.div className="bot-blob-home"></motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="hero-wrapper"
      >
        <motion.div variants={childVariants} className="flex gap-[8px] ">
          <h1>Hi, I'm Shubham,</h1>
          <div className="fancy-image-box profile-img"></div>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex gap-[8px] xm:gap-[8px]"
        >
          <div className="fancy-image-box terminal"></div>
          <h1>A Front-end</h1>
        </motion.div>
        <motion.div variants={childVariants} className="flex gap-[8px] ">
          <h1>Developer & Designer</h1>
          <div className="fancy-image-box figma"></div>
        </motion.div>
        <motion.div variants={childVariants} className="flex gap-[8px] ">
          <div className="fancy-image-box mumbai"></div>
          <h1>Based in Mumbai</h1>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="dotted-line"
        ></motion.div>
        <motion.p variants={childVariants}>
          Currently working at{" "}
          <span className="highlight-text-italic">Artificial Reality</span>{" "}
          <br />
          This is where I share my work, projects, and things I’m learning along
          the way.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Home;
