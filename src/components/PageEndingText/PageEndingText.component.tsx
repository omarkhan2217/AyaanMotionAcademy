import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./PageEndingText.module.scss";

export interface IPageEndingTextProps {
  mainHeader: string;
  color?: string;
}

export const PageEndingText: React.FC<IPageEndingTextProps> = ({ mainHeader, color }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={classes.mainContainer}>
      <div style={{ color: color }} className={classes.mainHeader}>
        {mainHeader}
      </div>
    </motion.div>
  );
};
