/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./ourBatch.module.scss";
import { PageEndingText, PageText, OurBatchesComponent } from "../../components";
import { batchesData } from "../../constants";
import { useNavigate } from "react-router-dom";

export const OurBatchContainer: React.FC = () => {
  const navigate = useNavigate();
  const [orderedData, setOrderedData] = useState(batchesData);

  const createFromBottomVariant = (index: number) => ({
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.1 } },
    hidden: { opacity: 0, y: 50 },
  });

  const fromLeftVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: -100 },
  };

  const fromRightVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: 100 },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        const scholarIndex = batchesData.findIndex((batch) => batch.isScholar);
        if (scholarIndex !== -1 && scholarIndex !== 0) {
          const reorderedData = [
            batchesData[scholarIndex],
            ...batchesData.slice(0, scholarIndex),
            ...batchesData.slice(scholarIndex + 1),
          ];
          setOrderedData(reorderedData);
        }
      } else {
        setOrderedData(batchesData);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.pageText}>
        <PageText
          mainHeader="From Foundation to Lakshya - A Batch for Every Aspirant"
          subHeader="Each batch at Ayaan's Motion Academy is more than just a program; it's a gateway to realizing your dreams."
          studentIcon={false}
        />
      </div>
      <div className={classes.batchesCardContainer}>
        {orderedData.map((batch, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
          const controls = useAnimation();

          useEffect(() => {
            if (inView) {
              controls.start("visible");
            }
          }, [controls, inView]);

          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={createFromBottomVariant(index)}
            >
              <OurBatchesComponent
                BatchName={batch.BatchName}
                grade={batch.grade}
                guide={batch.guide}
                isScholar={batch.isScholar}
                onClick={() => navigate(`/our-batches${batch.path}`)}
              />
            </motion.div>
          );
        })}
      </div>
      <div className={classes.otherDetailContainer}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fromLeftVariant}
          className={classes.otherMainheading}
        >
          With a curriculum meticulously crafted by expert educators and subject matter specialists, our batches offer:
        </motion.div>
        <div className={classes.otherDetails}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fromRightVariant}
            className={classes.subDetails}
          >
            <span className={classes.otherHeading}>Personalized Learning Experiences:</span> Understand and engage with
            subjects like never before, with customized study plans that adapt to your learning pace and style.
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fromRightVariant}
            className={classes.subDetails}
          >
            <span className={classes.otherHeading}>Expert Guidance:</span> Learn from the best in the field. Our faculty
            comprises renowned educators and exam veterans who bring invaluable insights and mentorship.
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fromRightVariant}
            className={classes.subDetails}
          >
            <span className={classes.otherHeading}>Success-Oriented Curriculum:</span> Whether it's acing your board
            exams or securing a top rank in competitive exams like IIT/JEE and NEET, our curriculum is aligned with your
            goals.
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fromRightVariant}
            className={classes.subDetails}
          >
            <span className={classes.otherHeading}>Interactive and Supportive Environment:</span> With interactive doubt
            sessions, regular assessments, and a supportive community, we ensure your academic journey is engaging and
            collaborative.
          </motion.div>
        </div>
      </div>
      <PageEndingText mainHeader="Ready to start your journey? Explore our batches, register for the one that aligns with your aspirations, or inquire for more details to make an informed decision about your academic future. Your path to excellence begins here at Ayaan's Motion Academy." />
    </div>
  );
};
