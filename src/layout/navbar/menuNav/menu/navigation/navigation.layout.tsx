import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../menuItems";
import classes from './navigation.module.scss';
import { Button } from "../../../../../components";
import { useWindowSize } from "usehooks-ts";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2, type: "spring", }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1, type: "spring", }
    }
};

const divVariants = {
    open: {
        y: 0, // Final position (Y-axis)
        opacity: 1, // Fully visible
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    },
    closed: {
        y: 50, // Start position (Y-axis, 50 pixels down)
        opacity: 0, // Fully transparent
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};


interface INavigationProps {
    isOpen?: boolean
}

export const Navigation: React.FC<INavigationProps> = ({ isOpen }) => {
    const { width } = useWindowSize();
    return (
        <motion.ul className={classes.ul} variants={variants} animate={isOpen ? 'open' : 'closed'}>
            <MenuItem isOpen={isOpen} />
            {width > 576 ? null : <motion.div
                className={classes.buttonContainer}
                variants={divVariants}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
            >
                <Button label="Book a Demo" size="md" />
            </motion.div>}
        </motion.ul>
    );
}
