import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import classes from "./aboutUs.module.scss";

export const AboutUsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("rgb(255, 255, 255)"); // Start with light color

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const elemCenter = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;

        // Calculate the factor based on the element's position relative to the center
        const distanceToCenter = elemCenter - windowCenter;
        let factor = 0;

        // When the element is above the center, keep it at the darkest color
        if (distanceToCenter < 0) {
          factor = 1; // Keep the color at its darkest
        } else {
          // As the element moves below the center, start fading to white
          const fadeStart = windowCenter; // Start fading when the element's center is at the viewport's center
          const fadeEnd = windowCenter + rect.height; // End fading when the element's center is below the viewport's center by its height

          factor = 1 - Math.min(Math.max(distanceToCenter / (fadeEnd - fadeStart), 0), 1);
        }

        setColor(calculateColor(factor));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set color based on initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Removed color dependency to prevent unnecessary re-registrations

  const calculateColor = (factor: number) => {
    const endColor = { r: 14, g: 44, b: 226 }; // Dark shade #0e2ce2
    const startColor = { r: 109, g: 130, b: 255 }; // Light shade

    const r = Math.floor(startColor.r + (endColor.r - startColor.r) * factor);
    const g = Math.floor(startColor.g + (endColor.g - startColor.g) * factor);
    const b = Math.floor(startColor.b + (endColor.b - startColor.b) * factor);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={containerRef}
      className={classes.container}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={classes.innerdis}>
        Founded with a{" "}
        <span style={{ color: color }} className={classes.boldDis}>
          vision
        </span>{" "}
        to transform dreams into{" "}
        <span style={{ color: color }} className={classes.boldDis}>
          achievements
        </span>
        , Ayaan's Motion Academy is your partner in academic{" "}
        <span style={{ color: color }} className={classes.boldDis}>
          excellence
        </span>
        .
      </div>
    </motion.div>
  );
};
