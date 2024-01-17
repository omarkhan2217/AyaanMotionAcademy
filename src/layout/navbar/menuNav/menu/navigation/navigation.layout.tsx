import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../menuItems";
import classes from './navigation.module.scss';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation: React.FC = () => (
    <motion.ul className={classes.ul} variants={variants}>
        <MenuItem />
    </motion.ul>
);

