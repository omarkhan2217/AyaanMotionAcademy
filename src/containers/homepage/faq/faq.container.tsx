/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./faq.module.scss";
import { FAQComponent, SectionText } from "../../../components";
import { FaqData } from "./faq.data";

export const FaqContainer: React.FC = () => {
  // Animation variants for the FAQ items
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 150 },
  };

  return (
    <div className={classes.mainContainer}>
      <SectionText hasButton={false} mainHeader="Frequently Asked Questions" isButtonCentered />
      {FaqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} variants={variants} />
      ))}
    </div>
  );
};

const FaqItem: React.FC<{ question: string; answer: string; variants: any }> = ({ question, answer, variants }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div style={{width: '100%'}} ref={ref} initial="hidden" animate={controls} variants={variants}>
      <FAQComponent question={question} answer={answer} />
    </motion.div>
  );
};
