import React from "react";
import { StudentCard } from "../../../components";
import classes from './ourAchievers.module.scss'
import { motion } from 'framer-motion';
import { ourAchieversData } from ".";

export const OurAchieversContainer: React.FC = () => {
    return (
        <div className={classes.mainContainer}>
            {ourAchieversData.map((item) => {
                return (
                    <motion.div
                        key={Math.random()}
                        initial={{ opacity: 0, y: item.y }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: item.stifness }}
                    >
                        <StudentCard college={item.college} name={item.name} rank={item.rank} image={item.image} color={item.color ? item.color : ''} />
                    </motion.div>
                )
            })}
        </div>


    )
}