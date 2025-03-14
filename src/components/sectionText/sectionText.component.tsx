/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import classes from "./sectionText.module.scss";
import { motion } from "framer-motion";
import { Button } from "../../components";
import { ArrowIcon } from "../../assets";
import { useButtonResizeAlt } from "../../hooks";
import { useInView } from "react-intersection-observer";

export interface ISectionTextProps {
  mainHeader: string;
  subHeader?: string;
  hasButton?: boolean;
  buttonVariant?: "outline" | "primary";
  buttonText?: string;
  isButtonCentered?: boolean;
  onClick?: () => void;
}

export const SectionText: React.FC<ISectionTextProps> = (props) => {
  const {
    mainHeader,
    onClick,
    subHeader,
    buttonText,
    buttonVariant = "outline",
    hasButton = true,
    isButtonCentered = false,
  } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const fadeInScaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div ref={ref} className={isButtonCentered ? classes.innerContainerAlt : classes.innerContainer}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInScaleVariants}
        className={classes.mainHeading}
      >
        {mainHeader}
      </motion.div>
      {subHeader && (
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInScaleVariants}
          className={classes.subHeader}
        >
          {subHeader}
        </motion.div>
      )}
      {hasButton && (
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInScaleVariants}
          className={isButtonCentered ? classes.buttonAlt : classes.button}
        >
          <Button
            label={buttonText}
            variant={buttonVariant}
            icon={<ArrowIcon />}
            onClick={onClick}
            size={useButtonResizeAlt()}
          />
        </motion.div>
      )}
    </div>
  );
};
