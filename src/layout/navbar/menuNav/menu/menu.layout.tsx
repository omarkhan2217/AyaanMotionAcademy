import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../../../hooks";
import { MenuToggleCustom, Navigation } from ".";
import classes from './menu.module.scss'

const sidebar = {
    open: (width = 1024) => ({
        clipPath: `circle(${width * 2 + 200}px at calc(100% - 37%) 4.3%)`,
        boxShadow: "10px 10px 20px rgba(0, 0, 0, 1)",
        backgroundColor: 'white',
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at calc(100% - 34%) 4.3%)",
        boxShadow: "10px 10px 20px rgba(0, 0, 0, 1)",
        backgroundColor: 'transparent',
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

export const Menu: React.FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const closeMenu = () => {
        if (isOpen) {
            toggleOpen();
        }
    };

    return (
        <>
            <div
                className={`${classes.overlay} ${isOpen ? classes.overlayOpen : ''}`}
                onClick={closeMenu}
            />
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className={classes.nav}
            >
                <MenuToggleCustom toggle={() => toggleOpen()} />
                <motion.div className={classes.background} variants={sidebar} />
                <Navigation isOpen={isOpen} />
            </motion.nav>
        </>
    );
};
