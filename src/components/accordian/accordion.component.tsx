import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './accordion.module.scss'; // Import your CSS file
import { MorphIcon } from '../../assets';

interface FAQProps {
    question: string;
    answer: string;
}

export const FAQComponent: React.FC<FAQProps> = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);

    const toggle = () => {
        setExpanded(prev => !prev);
    };

    const contentVariants = {
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 }
    };

    return (
        <div className={classes.container}>
            <div className={classes.header} onClick={toggle}>
                <span className={classes.question}>{question}</span>
                <MorphIcon isMinus={expanded} />
            </div>
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={contentVariants}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className={classes.contentWrapper}
                    >
                        <div className={classes.content}>
                            <p className={classes.answer}>
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
