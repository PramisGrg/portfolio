export const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export const loader = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
};

export const SlideP = {
  initial: {
    y: "90vh",
  },
  animate: {
    y: "0%",
    transition: { duration: 0.5 },
  },
};
