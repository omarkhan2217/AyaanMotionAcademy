import React from 'react';
import { motion } from 'framer-motion';

interface MorphIconProps {
    isMinus: boolean;
}

export const MorphIcon: React.FC<MorphIconProps> = ({ isMinus }) => {
    const circleVariants = {
        minus: { fill: "#000" },
        plus: { fill: "#0024FF" }
    };

    const horizontalLineVariants = {
        minus: { opacity: 1, scaleX: 1 },
        plus: { opacity: 1, scaleX: 1 }
    };

    const verticalLineVariants = {
        minus: { opacity: 0, rotate: 90 },
        plus: { opacity: 1, rotate: 0 }
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
            <motion.circle
                cx={20}
                cy={20}
                r={20}
                variants={circleVariants}
                animate={isMinus ? "minus" : "plus"}
                transition={{ duration: 0.3 }}
            />
            <motion.line
                x1={11}
                y1={20}
                x2={29}
                y2={20}
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth={4}
                variants={horizontalLineVariants}
                animate={isMinus ? "minus" : "plus"}
                transition={{ duration: 0.3 }}
            />
            <motion.line
                x1={20}
                y1={11}
                x2={20}
                y2={29}
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth={4}
                variants={verticalLineVariants}
                animate={isMinus ? "minus" : "plus"}
                transition={{ duration: 0.3, delay: isMinus ? 0 : 0.15 }}
            />
        </svg>
    );
};
