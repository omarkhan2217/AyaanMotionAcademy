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
    const slidesPerView =
        width <= 420 ? 1.2 :
            width <= 500 ? 1.4 :
                width <= 600 ? 1.6 :
                    width <= 768 ? 2.2 :
                        width <= 1024 ? 2.6 :
                            width <= 1280 ? 3.2 :
                                width <= 1440 ? 4 :
                                    width > 1440 ? 4 :
                                        ourAchieversData.length;
    return (
        <div className={classes.mainContainer}>
            {width <= 1280 ?

                <Swiper
                    spaceBetween={0}
                    slidesPerView={slidesPerView}
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
                :
                ourAchieversData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: item.y }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: item.stifness }}
                    >
                        <MainStudentCard college={item.college} name={item.name} rank={item.rank} image={item.image} color={item.color ? item.color : ''} />
                    </motion.div>
                ))
            }
        </div>
    );
};
