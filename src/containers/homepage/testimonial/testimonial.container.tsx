import React from "react";
import { TestimonialCard } from "../../../components";
import classes from './testimonial.module.scss';
import { TestimonialData } from ".";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";


export const TestimonialContainer: React.FC = () => {
    const { width } = useWindowSize();
    const spaceBetween = 0
    const slidesPerView =
        width <= 390 ? 1.4 :
            width <= 490 ? 1.6 :
                width <= 600 ? 2.1 :
                    width <= 800 ? 2.4 :
                        width <= 900 ? 2.8 :
                            width <= 1000 ? 3.2 :
                                width <= 1100 ? 3.5 :
                                    width <= 1400 ? 3.9 :
                                        width <= 1500 ? 4.2 :
                                            width <= 1600 ? 4.5 :
                                                width <= 1700 ? 4.8 :
                                                    width > 1600 ? 5.2 :
                                                        TestimonialData.length;
    return (
        <div className={classes.mainContainer}>
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                freeMode={true}
                className={classes.carousel} >
                {TestimonialData.map((item) => (
                    <SwiperSlide key={Math.random()} >
                        <div className={classes.testimonialCardContainer}>
                            <motion.div>
                                <TestimonialCard
                                    image={item.image}
                                    name={item.name}
                                    comment={item.comment}
                                />
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
