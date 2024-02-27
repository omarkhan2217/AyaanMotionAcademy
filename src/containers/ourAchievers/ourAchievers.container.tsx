/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageText, OtherStudentCard, PageEndingText, HighlightedStudentCard } from "../../components";
import classes from "./ourAchievers.module.scss";
import { HighlightedAchieversData, OtherAchieversData } from "../../constants";
import { useWindowSize } from "usehooks-ts";

export const OurAchieversContainer: React.FC = () => {
  const { width } = useWindowSize();
  const isTablet = width <= 768;

  const fromBottomVariant = (index: number) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.08 },
    },
  });

  const fromSideVariant = (isReversed: boolean) => ({
    hidden: { opacity: 0, x: !isReversed ? -150 : 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  });

  return (
    <div className={classes.mainContainer}>
      <PageText
        mainHeader="Beyond Boundaries Towards Brilliance"
        subHeader="Showcasing the Pioneers of Tomorrow, Today"
        hasButton={false} studentIcon={false} />

      <div className={classes.highlightedStudentCardMainContainer}>
        {HighlightedAchieversData.map((student) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

          React.useEffect(() => {
            if (inView) {
              controls.start("visible");
            }
          }, [controls, inView]);

          return (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={fromSideVariant(student.isReversed)}
              key={student.id}
              className={classes.highlightedStudentCardContainer}
            >
              <HighlightedStudentCard
                color={student.color}
                pillColor={student.color}
                bgColor={student.bgColor}
                name={student.name}
                description={student.description}
                rank={student.rank}
                image={isTablet ? student.altImage : student.image}
                isReversed={student.isReversed}
              />
            </motion.div>
          );
        })}
      </div>

      <PageText mainHeader={"Our Achievers: Paving Paths, Setting Records"} studentIcon={false} />

      <div className={classes.otherStudentCard}>
        {OtherAchieversData.map((item, index) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

          React.useEffect(() => {
            if (inView) {
              controls.start("visible");
            }
          }, [controls, inView]);

          return (
            <motion.div ref={ref} initial="hidden" animate={controls} variants={fromBottomVariant(index)} key={index}>
              <OtherStudentCard
                rank={item.rank}
                college={item.college}
                image={item.image}
                name={item.name}
                stream={item.stream}
              />
            </motion.div>
          );
        })}
      </div>
      <PageEndingText
        mainHeader={
          "Discover the brilliance within our accomplished achievers who soared to All India Ranks (AIR) in IIT/JEE. Their inspiring journeys, guided by expert mentors at Ayaan's Motion Academy, stand testament to the transformative education we offer. Join us, dream big, and let your success story be the next constellation in our Hall of Achievers."
        }
      />
    </div>
  );
};
