import React, { useRef } from "react";
import { motion } from "framer-motion";

interface PageWrapperProps {
  children: React.ReactNode;
}

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition = {
  duration: 0.2,
};

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const ref = useRef(null);

  return (
    <motion.div ref={ref} initial="initial" animate="animate" exit="exit" variants={variants} transition={transition}>
      {children}
    </motion.div>
  );
};

export default PageWrapper;
