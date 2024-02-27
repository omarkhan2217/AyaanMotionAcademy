import React from "react";
import classes from "./ourbatches.module.scss";
import { PageText, OurBatchesComponent } from "../../../components";
import { OurBatchesData } from "./ourBatches.data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";

export const Ourbatchescontainer: React.FC = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: (i: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, delay: i * 0.2 },
    }),
    hidden: (i: number) => ({
      x: i === 0 ? -100 : i === 2 ? 100 : 0,
      y: i === 1 ? 100 : 0,
      opacity: 0,
    }),
  };

  const SlidePreView =
    width <= 400
      ? 1.2
      : width <= 550
      ? 1.4
      : width <= 600
      ? 1.6
      : width <= 650
      ? 1.4
      : width <= 768
      ? 1.7
      : width <= 900
      ? 2.1
      : width <= 1024
      ? 2.3
      : 4;

  const scholarBatch = OurBatchesData.find((batch) => batch.isScholar) || {
    BatchName: "",
    grade: "",
    guide: "",
    image: "",
    isScholar: false,
    path: "",
  };
  const otherBatches = OurBatchesData.filter((batch) => !batch.isScholar);

  const batchesToDisplay = width <= 1024 ? [scholarBatch, ...otherBatches] : OurBatchesData;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.textContainer}>
        <PageText
          mainHeader="Explore Our Diverse Academic Programs"
          subHeader="Find Your Path: Customized Learning for Every Aspiring Mind"
          hasButton
          buttonText="View All"
          onClick={() => navigate("/our-batches")}
          studentIcon={false}
        />
      </div>
      <div className={classes.batchesCardContainer} ref={ref}>
        {width <= 1024 ? (
          <Swiper
            autoHeight
            spaceBetween={50}
            slidesPerView={SlidePreView}
            freeMode={true}
            className={classes.carousel}
          >
            {batchesToDisplay.map((batch, index) => (
              <SwiperSlide key={index}>
                <motion.div custom={index} initial="hidden" animate={controls} variants={variants}>
                  <OurBatchesComponent
                    BatchName={batch.BatchName}
                    grade={batch.grade}
                    guide={batch.guide}
                    image={batch.image}
                    isScholar={batch.isScholar}
                    onClick={() => navigate(`/our-batches${batch.path}`)}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          batchesToDisplay.map((batch, index) => (
            <motion.div
              key={index}
              className={classes.ourBatchesCardContainer}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <OurBatchesComponent
                BatchName={batch.BatchName}
                grade={batch.grade}
                guide={batch.guide}
                isScholar={batch.isScholar}
                image={batch.image}
                onClick={() => navigate(`/our-batches${batch.path}`)}
              />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};
