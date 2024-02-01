import React from "react";
import { TestimonialCard } from "../../../components";
import classes from './testimonial.module.scss';
import { TestimonialData } from ".";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";


export const TestimonialContainer: React.FC = () => {
    const {width} =useWindowSize();
    return (
        <div className={classes.mainContainer}>
            <Swiper
            spaceBetween={200}
            slidesPerView={width <= 1920? 5 : TestimonialData.length}
            freeMode={true}
            className={classes.carousel} >
                {TestimonialData.map((item) => (
                    <SwiperSlide>
                    <div key={Math.random()}>
                        <motion.div>
                            <TestimonialCard
                                image={item.image}
                                name={item.name}
                                comment={item.comment} y={0} stifness={0} />
                        </motion.div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
