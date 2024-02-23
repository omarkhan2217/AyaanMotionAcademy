import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TestimonialCard } from "../../../components";
import classes from "./testimonial.module.scss";
import { TestimonialData } from ".";
import { useWindowSize } from "usehooks-ts";

export const TestimonialContainer: React.FC = () => {
  const { width } = useWindowSize();
  const slidesPerView =
    width <= 390
      ? 1.4
      : width <= 490
      ? 1.99
      : width <= 600
      ? 2.1
      : width <= 800
      ? 2.4
      : width <= 900
      ? 2.8
      : width <= 1000
      ? 3.2
      : width <= 1100
      ? 3.5
      : width <= 1400
      ? 3.9
      : width <= 1500
      ? 4.2
      : width <= 1600
      ? 4.5
      : width <= 1700
      ? 4.8
      : width > 1600
      ? 5.2
      : TestimonialData.length;
      return (
        <div className={classes.mainContainer}>
          <Swiper spaceBetween={30} slidesPerView={slidesPerView} freeMode={true} className={classes.carousel}>
            {TestimonialData.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCardAnimated image={item.image} name={item.name} comment={item.comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    };
    
    const TestimonialCardAnimated: React.FC<{ image: string; name: string; comment: string; }> = ({ image, name, comment }) => {
      const controls = useAnimation();
      const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
      React.useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
    
      const variants = {
        visible: { x: 0, opacity: 1, transition: { type: "spring", duration: 1 } },
        hidden: { x: 100, opacity: 0 },
      };
    
      return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
          <div className={classes.testimonialCardContainer}>
            <TestimonialCard image={image} name={name} comment={comment} />
          </div>
        </motion.div>
      );
    };