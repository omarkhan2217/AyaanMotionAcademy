import React from "react";
import { StudentCard } from "../../../components";
import classes from './ourAchievers.module.scss'
import { motion } from 'framer-motion';
import { ourAchieversData } from ".";


export const OurAchieversContainer: React.FC = () => {
    return (
        <div className={classes.mainContainer}>
            {ourAchieversData.map((item, index) => {
                return (
                    <motion.div
                        key={index}
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
{/* <motion.div
    initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 80 }}
>
    <StudentCard college="IIT DELHI" name="Ayush Kumar Paratha" rank={5} image={IMG} color="hsl(118, 98%, 25%)" />
</motion.div>
<motion.div
    initial={{ opacity: 0, y: 250 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 70 }}
>
    <StudentCard college="IIT DELHI" name="Ayush Kumar Paratha" rank={5} image={IMG} />
</motion.div>
<motion.div
    initial={{ opacity: 0, y: 450 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 60 }}
>
    <StudentCard college="IIT DELHI" name="Ayush Kumar Paratha" rank={1346} image={IMG} />
</motion.div>
<motion.div
    initial={{ opacity: 0, y: 650 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
>
    <StudentCard college="IIT MUMBAI" name="Ayush Kumar Paratha" rank={565} image={IMG} />
</motion.div> */}