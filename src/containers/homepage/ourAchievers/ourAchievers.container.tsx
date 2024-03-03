import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import { MainStudentCard } from "../../../components";
import classes from "./ourAchievers.module.scss";
import { ourAchieversData } from ".";

export const OurAchieversSection: React.FC = () => {
  const { width } = useWindowSize();
  const slidesPerView =
    width <= 420
      ? 1.4
      : width <= 500
        ? 1.7
        : width <= 600
          ? 1.6
          : width <= 768
            ? 2.2
            : width <= 1024
              ? 2.6
              : width <= 1280
                ? 3.2
                : width <= 1440
                  ? 4
                  : width > 1440
                    ? 4
                    : ourAchieversData.length;

  const cardVariant = {
    hidden: { opacity: 0, y: 200 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 70,
        damping: 9,
        mass: 0.8,
      },
    }),
  };

  return (
    <div className={classes.mainContainer}>
      {width <= 1280 ? (
        <Swiper spaceBetween={0} slidesPerView={slidesPerView} freeMode={true} className={classes.carousel}>
          {ourAchieversData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div custom={index} initial="hidden" animate="visible" variants={cardVariant}>
                <MainStudentCard
                  border={item.border}
                  college={item.college}
                  name={item.name}
                  rank={item.rank}
                  image={item.image}
                  pillColor={item.pillColor}
                  color={item.color ? item.color : ""}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ourAchieversData.map((item, index) => (
          <motion.div key={index} custom={index} initial="hidden" animate="visible" variants={cardVariant}>
            <MainStudentCard
              border={item.border}
              college={item.college}
              name={item.name}
              rank={item.rank}
              image={item.image}
              pillColor={item.pillColor}
              color={item.color ? item.color : ""}
            />
          </motion.div>
        ))
      )}
    </div>
  );
};
