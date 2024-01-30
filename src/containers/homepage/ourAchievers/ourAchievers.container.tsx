import React from "react";
import { StudentCard } from "../../../components";
import classes from './ourAchievers.module.scss';
import Carousel from "nuka-carousel"
import { ourAchieversData } from ".";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

export const OurAchieversContainer: React.FC = () => {
    const { width } = useWindowSize();
    return (
        <div className={classes.mainContainer}>
            {width <= 1280 ?
                <div className={classes.carouselContainer}>
                    <Carousel className={classes.carousel} slidesToShow={3.2}
                        disableEdgeSwiping={true}
                        withoutControls={true}
                        cellSpacing={50}
                    >
                        {ourAchieversData.map((item) => (
                            <div key={Math.random()}>
                                <motion.div
                                    initial={{ opacity: 0, y: item.y }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: item.stifness }}
                                >
                                    <StudentCard college={item.college} name={item.name} rank={item.rank} image={item.image} color={item.color ? item.color : ''} />
                                </motion.div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                :
                ourAchieversData.map((item) => (
                    <div key={Math.random()}>
                        <motion.div
                            initial={{ opacity: 0, y: item.y }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: item.stifness }}
                        >
                            <StudentCard college={item.college} name={item.name} rank={item.rank} image={item.image} color={item.color ? item.color : ''} />
                        </motion.div>
                    </div>
                ))
            }
        </div>
    );
};

export default OurAchieversContainer;