import * as React from "react";
import { motion } from "framer-motion";
import classes from './menuItems.module.scss';
import { NavbarData } from "../../../../../constants";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


interface IMenuItemProps {
    i?: number
}

export const MenuItem: React.FC<IMenuItemProps> = () => {
    return (

        NavbarData.map((item) => {
            return (
                <motion.li
                    className={classes.li}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div>{item.label}</div>
                </motion.li>
            )
        })

    );
};