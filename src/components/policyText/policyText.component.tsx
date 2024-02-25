import React from "react"
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
        triggerOnce: true, // Trigger animation only once
        threshold: 0.15, // Trigger when 10% of the element is in view
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
        animate={inView ? "visible" : "hidden"} // Control animation based on inView
        variants={fadeInScaleVariants}
        className={classes.mainContainer}
      ref={ref}>
            <div className={classes.mainHeader}>
                {mainHeader}
            </div>
            {details.map((item) => {
                return (
                    <div className={classes.details}>
                        {item.text}
                    </div>
                )
            })
            }
        </motion.div>
    );
}