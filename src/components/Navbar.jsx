import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import HomeIcon from "../icons/HomeIcon";
import ProjectIcon from "./ProjectIcon";
import ArchiveIcons from "../icons/ArchiveIcons";
import MyIcon from "../icons/MyIcon";

const navVariant = {
  initial: {
    y: 100,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      ease: [0.75, 0, 0.36, 1],
    },
  },
};

const navLinkVariant = {
  initial: {
    y: 5,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  const linkClass = ({ isActive }) => (isActive ? "activeLink" : "");

  return (
    <motion.div
      className="nav"
      variants={navVariant}
      initial="initial"
      animate="animate"
    >
      <ul>
        <motion.li className="nav-link" variants={navLinkVariant}>
          <span className="tool-tip" style={{ left: "2%" }}>
            /home
          </span>
          <NavLink className={linkClass} to={"/"}>
            <HomeIcon />
          </NavLink>
        </motion.li>
        <motion.li className="nav-link" variants={navLinkVariant}>
          <span className="tool-tip" style={{ left: "20%" }}>
            /projects
          </span>
          <NavLink className={linkClass} to={"/projects"}>
            <ProjectIcon />
          </NavLink>
        </motion.li>
        <motion.li className="nav-link" variants={navLinkVariant}>
          <span className="tool-tip" style={{ left: "48%" }}>
            /archives
          </span>
          <NavLink className={linkClass} to={"/archives"}>
            <ArchiveIcons />
          </NavLink>
        </motion.li>
        <motion.li className="nav-link" variants={navLinkVariant}>
          <span className="tool-tip" style={{ left: "77%" }}>
            /about
          </span>
          <NavLink className={linkClass} to={"/about"}>
            <MyIcon />
          </NavLink>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
