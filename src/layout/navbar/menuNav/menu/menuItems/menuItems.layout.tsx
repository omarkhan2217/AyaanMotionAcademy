import * as React from "react";
import { motion } from "framer-motion";
import classes from './menuItems.module.scss';
import { NavbarData } from "../../../../../constants";
import { Link } from "react-router-dom";

interface IMenuItemProps {
    i?: number,
    isOpen?: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
export const AnimationVariants = {
    open1: {
        x: 0,
        opacity: 1,
        display: "block",
        initial: { x: 200, opacity: 0 },
        animate: { opacity: 1 },
        transition: {
            stifness: 100,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    open2: {
        x: 0,
        opacity: 1,
        display: "block",
        initial: { x: 300, opacity: 0 },
        animate: { opacity: 1 },
        transition: {
            delay: 0.03,
            stifness: 80,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    open3: {
        x: 0,
        opacity: 1,
        display: "block",
        initial: { x: 400, opacity: 0 },
        animate: { opacity: 1 },
        transition: {
            delay: 0.05,
            stifness: 70,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    open4: {
        x: 0,
        opacity: 1,
        display: "block",
        initial: { x: 500, opacity: 0 },
        animate: { opacity: 1 },
        transition: {
            delay: 0.07,
            stifness: 60,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    open5: {
        x: 0,
        opacity: 1,
        display: "block",
        initial: { x: 600, opacity: 0 },
        animate: { opacity: 1 },
        transition: {
            delay: 0.09,
            stifness: 50,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    open6: {
        x: 0,
        opacity: 1,
        display: "block",
        initial: { x: 200, opacity: 0 },
        animate: { opacity: 1 },
        transition: {
            delay: 0.09,
            stifness: 100,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    closed1: {
        x: 200,
        opacity: 0,
        transition: {
            delay: 0,
            stifness: 50,
            opacity: { duration: 0.8 },
            type: "spring",
        },
    },
    closed2: {
        x: 200,
        opacity: 0,
        transition: {
            delay: 0.03,
            stifness: 50,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    closed3: {
        x: 200,
        opacity: 0,
        transition: {
            delay: 0.05,
            stifness: 50,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    closed4: {
        x: 200,
        opacity: 0,
        transition: {
            delay: 0.07,
            stifness: 50,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    closed5: {
        x: 200,
        opacity: 0,
        transition: {
            delay: 0.09,
            stifness: 50,
            opacity: { duration: 0.8 },
            type: "spring",
        }
    },
    closed6: {
        x: 200,
        opacity: 0,
        display: "none",
        transition: {
            delay: 0.09,
            stifness: 50,
            opacity: { duration: 0.8 },
            type: "spring",
        },
    },
    closedNew: {
        x: 200,
        opacity: 0,
        display: "none",
        transition: {
            delay: 0.09,
            stifness: 50,
            opacity: { duration: 0.8 },
            type: "spring",
        },
    }
};

export const MenuItem: React.FC<IMenuItemProps> = ({ isOpen }) => {
    return (
        <div className={classes.mainContainer}>
            {NavbarData.map((item, index) => {
                return (
                    <motion.li
                        variants={AnimationVariants}
                        className={classes.link}
                        initial={`closed${item.key}`}
                        animate={isOpen ? `open${item.key}` : `closedNew`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        key={item.key || index}
                    >
                        <Link className={classes.link} to={item.linkTo}>{item.label}</Link>
                    </motion.li>
                )
            })}
        </div>
    );
};
