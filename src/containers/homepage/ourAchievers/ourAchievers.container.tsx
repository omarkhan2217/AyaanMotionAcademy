import React from "react";
import { StudentCard } from "../../../components";
import classes from './ourAchievers.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { ourAchieversData } from ".";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

export const OurAchieversContainer: React.FC = () => {
    const { width } = useWindowSize();

    return (
        <div className={classes.mainContainer}>
            <Swiper
                spaceBetween={50}
                slidesPerView={width <= 1280 ? 3.8 : ourAchieversData.length}
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
                            <StudentCard college={item.college} name={item.name} rank={item.rank} image={item.image} color={item.color ? item.color : ''} />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurAchieversContainer;
