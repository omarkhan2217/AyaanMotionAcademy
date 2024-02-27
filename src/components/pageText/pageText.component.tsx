/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./pageText.module.scss";
import { Button } from "../../components";
import { useButtonResizeAlt } from "../../hooks";
import { ArrowIcon, BatchStudentIcon } from "../../assets";

export interface IPageTextProps {
  mainHeader: string;
  subHeader?: string;
  hasButton?: boolean;
  buttonText?: string;
  buttonVariant?: "outline" | "primary";
  children?: React.ReactNode;
  onClick?: () => void;
  image?: string;
  studentIcon: boolean;
}

export const PageText: React.FC<IPageTextProps> = (props) => {
  const {
    mainHeader,
    subHeader,
    hasButton,
    buttonText,
    studentIcon,
    image,
    buttonVariant = "outline",
    onClick,
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
    <div className={classes.mainContainer} ref={ref}>
      {" "}
      <motion.div
        className={classes.mainHeader}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInScaleVariants}
      >
        {mainHeader}
      </motion.div>
      {subHeader && (
        <motion.div
          className={classes.subHeader}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInScaleVariants}
        >
          {subHeader}
        </motion.div>
      )}
      {hasButton && (
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
      {studentIcon ? (
        <div className={classes.studentIconContainer}>
          <BatchStudentIcon />
          <img src={image} />
          <div className={classes.studentIconText}>Join over 500+ Students</div>
        </div>
      ) : null}
    </div>
  );
};
