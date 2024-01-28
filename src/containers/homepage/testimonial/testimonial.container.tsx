import React from "react";
import { TestimonialCard } from "../../../components";
import classes from './testimonial.module.scss';
import Carousel from "nuka-carousel"
import { TestimonialData } from ".";
import { motion } from "framer-motion";

export const TestimonialContainer: React.FC = () => {
    return (
        <div className={classes.mainContainer}>
            <Carousel
                className={classes.carousel}
                slidesToShow={window.innerWidth < 576 ? 1 :5.8  }
                disableEdgeSwiping={true}
                withoutControls={true}  >
                {TestimonialData.map((item) => (
                    <div key={Math.random()}>
                        <motion.div>
                            <TestimonialCard
                                image={item.image}
                                name={item.name}
                                comment={item.comment}
                            />
                        </motion.div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
