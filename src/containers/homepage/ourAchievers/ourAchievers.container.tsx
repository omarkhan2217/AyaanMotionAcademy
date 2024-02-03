import React from "react";
import { MainStudentCard } from "../../../components";
import classes from './ourAchievers.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { ourAchieversData } from ".";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

export const OurAchieversSection: React.FC = () => {
    const { width } = useWindowSize();

    return (
        <div className={classes.mainContainer}>
            <Swiper
                spaceBetween={50}
                slidesPerView={
                    width <= 420 ? 1 :
                      width <= 768 ? 2 :
                        width <= 1024 ? 3 :
                          width <= 1440 ? 4 :
                            width > 1440 ? 4 :
                              ourAchieversData.length
                  }
                freeMode={true}
                className={classes.carousel}
            >
                {ourAchieversData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: item.y }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: item.stifness }}
                        >
                            <MainStudentCard college={item.college} name={item.name} rank={item.rank} image={item.image} color={item.color ? item.color : ''} />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
