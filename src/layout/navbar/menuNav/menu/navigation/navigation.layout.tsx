import * as React from "react";
import { motion } from "framer-motion";
import { AnimationVariants, MenuItem } from "../menuItems";
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

interface INavigationProps {
    isOpen?: boolean
}

export const Navigation: React.FC<INavigationProps> = ({ isOpen }) => {
    const { width } = useWindowSize();
    return (
        <motion.ul className={classes.ul} variants={variants} animate={isOpen ? 'open' : 'closed'}>
            <MenuItem isOpen={isOpen} />
            {isOpen ? null :
                <div style={{marginBottom: '304px'}} />
            }
            {width >= 576 ? null : <motion.div
                className={classes.buttonContainer}
                variants={AnimationVariants}
                initial="closed"
                animate={isOpen ? 'open6' : 'closed6'}
            >
                <Button label="Book a Demo" size="md" />
            </motion.div>}
        </motion.ul>
    );
}
