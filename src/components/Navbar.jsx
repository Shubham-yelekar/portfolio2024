import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import HomeIcon from "../icons/HomeIcon";
import ProjectIcon from "./ProjectIcon";
import ArchiveIcons from "../icons/ArchiveIcons";
import MyIcon from "../icons/MyIcon";
import BlogsIcon from "../icons/BlogsIcon";

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
        <motion.li className="nav-link relative" variants={navLinkVariant}>
          <span
            className="tool-tip"
            style={{ top: "-100%", left: "50%", transform: "translateX(-50%)" }}
          >
            /home
          </span>
          <NavLink className={linkClass} to={"/"}>
            <HomeIcon />
          </NavLink>
        </motion.li>
        <motion.li className="nav-link relative" variants={navLinkVariant}>
          <span
            className="tool-tip"
            style={{ top: "-100%", left: "50%", transform: "translateX(-50%)" }}
          >
            /projects
          </span>
          <NavLink className={linkClass} to={"/projects"}>
            <ProjectIcon />
          </NavLink>
        </motion.li>
        <motion.li className="nav-link relative" variants={navLinkVariant}>
          <span
            className="tool-tip text-nowrap"
            style={{ top: "-100%", left: "50%", transform: "translateX(-50%)" }}
          >
            /Lab ↗
          </span>

          <NavLink
            className={linkClass}
            to={"https://lab-drab-six.vercel.app/"}
            target="_blank"
          >
            <ArchiveIcons />
          </NavLink>
        </motion.li>

        <motion.li className="nav-link relative" variants={navLinkVariant}>
          <span
            className="tool-tip"
            style={{ top: "-100%", left: "50%", transform: "translateX(-50%)" }}
          >
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
