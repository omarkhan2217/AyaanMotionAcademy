import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import classes from './aboutUs.module.scss';

export const AboutUscontainer: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to interpolate between two values
  const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

  // Function to calculate color based on scroll position
  const calculateColor = () => {
    const startColor = { r: 255, g: 255, b: 255 }; // Light shade
    const endColor = { r: 14, g: 44, b: 226 }; // #0e2ce2
    const darkenFactor = Math.min(scrollY / 800, 1); // Ensures factor stays between 0 and 1

    const r = Math.floor(lerp(startColor.r, endColor.r, darkenFactor));
    const g = Math.floor(lerp(startColor.g, endColor.g, darkenFactor));
    const b = Math.floor(lerp(startColor.b, endColor.b, darkenFactor));

    return `rgb(${r}, ${g}, ${b})`;
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className={classes.container}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={classes.innerdis}>
        Founded with a <span style={{ color: calculateColor() }} className={classes.boldDis}>vision</span> to transform dreams into <span style={{ color: calculateColor() }} className={classes.boldDis}>achievements</span>, Ayaan's Motion Academy is your partner in academic <span style={{ color: calculateColor() }} className={classes.boldDis}>excellence</span>.
      </div>
    </motion.div>
  );
}
