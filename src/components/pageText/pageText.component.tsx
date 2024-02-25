/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView
import classes from "./pageText.module.scss";
import { Button } from "../../components";
import { useButtonResizeAlt } from "../../hooks";
import { ArrowIcon } from "../../assets";

export interface IPageTextProps {
  mainHeader: string;
  subHeader?: string;
  hasButton?: boolean;
  buttonText?: string;
  buttonVariant?: "outline" | "primary";
  children?: React.ReactNode;
  onClick?: () => void;
}

export const PageText: React.FC<IPageTextProps> = (props) => {
  const { mainHeader, subHeader, hasButton, buttonText, buttonVariant = "outline", onClick } = props;

  // Use useInView hook to track visibility
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.15, // Trigger when 10% of the element is in view
  });

  // Animation variants for fade-in and scale effect
  const fadeInScaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className={classes.mainContainer} ref={ref}>
      {" "}
      {/* Assign ref to the container */}
      <motion.div
        className={classes.mainHeader}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Control animation based on inView
        variants={fadeInScaleVariants}
      >
        {mainHeader}
      </motion.div>
      {subHeader && (
        <motion.div
          className={classes.subHeader}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Control animation based on inView
          variants={fadeInScaleVariants}
        >
          {subHeader}
        </motion.div>
      )}
      {hasButton && (
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Control animation based on inView
          variants={fadeInScaleVariants}
          className={classes.buttonContainer}
        >
          <Button
            label={buttonText}
            variant={buttonVariant}
            onClick={onClick}
            icon={<ArrowIcon />}
            size={useButtonResizeAlt()}
          />
        </motion.div>
      )}
    </div>
  );
};
