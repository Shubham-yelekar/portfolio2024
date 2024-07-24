const textVariants = {
  initial: {
    opacity: 0,
    filter: "blur(5px)"
  },
  animate: {
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
        ease: [0.75,0,.36,1]
    }
  }
}

export default textVariants