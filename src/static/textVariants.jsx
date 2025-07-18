const textVariants = {
  initial: {
    y:10,
    opacity: 0,
    filter: "blur(5px)"
  },
  animate: {
      filter: "blur(0px)",
      y:0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        ease: [0.75,0,.36,1]
    }
  }
}

export default textVariants