import React from "react";
import classes from "./policyText.module.scss";
import { IPrivacyPolicyProps } from "../../containers";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export interface IPolicyTextProps {
  mainHeader: string;
  details: IPrivacyPolicyProps[];
}
export const PolicyText: React.FC<IPolicyTextProps> = (props) => {
  const { mainHeader, details } = props;
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
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInScaleVariants}
      className={classes.mainContainer}
      ref={ref}
    >
      <div className={classes.mainHeader}>{mainHeader}</div>
      {details.map((item) => {
        return <div className={classes.details}>{item.text}</div>;
      })}
    </motion.div>
  );
};
