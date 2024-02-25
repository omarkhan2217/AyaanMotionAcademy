import React from "react";
import classes from "./contactUs.module.scss";
import { PolicyText, Button } from "../../components";
import img from "../../assets/images/contactUs/Rectangle 63.png";
import { ArrowIcon, FacebokIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "../../assets";
import { useWindowSize } from "usehooks-ts";
import { motion } from "framer-motion";

const contactUsdetails = [
  {
    text: "At Ayaan's Motion Academy, we're always here to listen and help guide you towards your academic dreams. Whether you have questions about our programs, need guidance on your educational journey, or simply want to learn more about what makes our academy unique, our doors (and inboxes) are always open. Reach out today, and let's start a conversation that could transform your future.",
  },
];

export const ContactUscontainer: React.FC = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width <= 768;

  const detailsVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } },
  };

  const imageVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } },
  };

  const socialIconsVariants = {
    offscreen: { scale: 0 },
    onscreen: { scale: 1, transition: { delay: 0.5, type: "spring", stiffness: 260, damping: 20 } },
  };

  return (
    <div className={classes.mainContainer}>
      <PolicyText mainHeader={"Get in Touch With Us"} details={contactUsdetails} />
      <motion.div
        className={classes.innerContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={classes.mainDetailsContainer}>
          <motion.div variants={detailsVariants} className={classes.details}>
            <div className={classes.heading}>Phone Number:</div>
            <a className={classes.link} href="tel:+918102549326">
              +918102549326
            </a>
          </motion.div>
          <motion.div variants={detailsVariants} className={classes.details}>
            <div className={classes.heading}>Email:</div>
            <a className={classes.link} href="mailto:ayaansmotionacademy@gmail.com">
              ayaansmotionacademy@gmail.com
            </a>
          </motion.div>
          <motion.div variants={detailsVariants} className={classes.details}>
            <div className={classes.heading}>Our Address:</div>
            <div className={classes.link}>Hariom Tower, 5th Floor, Room No. 504, 507, and 509, Ranchi, Jharkhand</div>
            <Button label="Open In Google Maps" variant="outline" icon={<ArrowIcon />} />
          </motion.div>
          {isSmallScreen && (
            <motion.img variants={imageVariants} src={img} alt="Hari-Om Tower" className={classes.imageContainer} />
          )}
          <motion.div variants={detailsVariants} className={classes.details}>
            <div className={classes.heading}>Follow Us:</div>
            <div className={classes.socialMedia}>
              <motion.a href="https://www.youtube.com/channel/UCml6M5g7DRPd6W1bcX7313g" variants={socialIconsVariants}>
                <YoutubeIcon />
              </motion.a>
              <motion.a href="https://www.instagram.com/ayaansmotionacademy/" variants={socialIconsVariants}>
                <InstagramIcon />
              </motion.a>
              <motion.a href="https://twitter.com/ayaansmotion" variants={socialIconsVariants}>
                <TwitterIcon />
              </motion.a>
              <motion.a href="https://www.facebook.com/ayaansmotionacademy" variants={socialIconsVariants}>
                <FacebokIcon />
              </motion.a>
              <motion.a href="/" variants={socialIconsVariants}>
                <LinkedInIcon />
              </motion.a>
            </div>
          </motion.div>
        </div>
        {!isSmallScreen && (
          <motion.img variants={imageVariants} src={img} alt="Hari-Om Tower" className={classes.imageContainer} />
        )}
      </motion.div>
    </div>
  );
};
