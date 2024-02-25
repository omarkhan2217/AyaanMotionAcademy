/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./aboutUs.module.scss";
import image from "../../assets/images/aboutUs/Rectangle 56 (1).png";
import image2 from "../../assets/images/aboutUs/Group 50.png";
import { Button, PageEndingText, PolicyText } from "../../components";
import { ArrowIcon } from "../../assets";

const Details = [
  {
    text: "As you stand at the crossroads of your academic journey, Ayaan's Motion Academy invites you to take the path leading to success, fulfillment, and self-discovery. With our proven track record, innovative learning solutions, and a supportive community, we are more than just an academy - we are a family. Together, let's unlock your potential, achieve your dreams, and set new benchmarks of success. Explore our programs, meet our faculty, and hear from our achievers. Discover how Ayaan's Motion Academy can be the catalyst for your academic and personal achievements. Your future begins here, and we are excited to be a part of your journey.",
  },
];

const inspireSections = [
  {
    id: "philosophy",
    title: "Our Philosophy: Education Tailored to Aspirant's Dreams",
    content:
      "Education is not one-size-fits-all. At Ayaan's Motion Academy, we understand that each student is unique, with distinct learning styles, aspirations, and challenges. Our educational philosophy centers around personalized learning, where education is tailored to cater to individual needs, fostering an environment where every student can thrive. With a blend of traditional values and modern teaching methodologies, we prepare our students not just for exams, but for life.",
  },
  {
    id: "challenges",
    title: "Overcoming Contemporary Challenges: A Modern Approach to Learning",
    content:
      "In today's fast-paced world, students face myriad challenges - from information overload and digital distractions to the pressures of competitive exams. Ayaan's Motion Academy addresses these challenges head-on, integrating technology with education to provide a balanced and engaging learning experience. Our digital learning platforms, interactive tools, and online resources complement our traditional teaching methods, ensuring students remain focused, motivated, and on track towards their goals.",
  },
  {
    id: "success",
    title: "Proven Success: Our Legacy and Your Future",
    content:
      "The success of our students is the true testament to our commitment and dedication. With countless top ranks in competitive exams like IIT/JEE and NEET, and exceptional board exam results, our achievers' circle continues to grow each year. These accomplishments underscore the effectiveness of our teaching methodologies, personalized learning plans, and the relentless spirit of our students and faculty alike.",
  },
  {
    id: "development",
    title: "Beyond Academics: Nurturing Well-Rounded Individuals",
    content:
      "At Ayaan's Motion Academy, we believe in holistic development. Our curriculum extends beyond textbooks, incorporating life skills, stress management workshops, and career guidance sessions. We prepare our students for the challenges of tomorrow, equipping them with the knowledge, skills, and confidence to excel in all walks of life.",
  },
];

export const AboutUsContainer: React.FC = () => {
  const navigation = useNavigate();
  const { width } = useWindowSize();
  const isSmallScreen = width <= 768;
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
    hidden: { opacity: 0 },
  };

  const textVariants = {
    visible: {
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 70, damping: 8, mass: 0.8 },
    },
    hidden: { x: -60 },
  };

  const textVariants_2 = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 70, damping: 8, mass: 0.8 },
    },
    hidden: { x: -100, opacity: 0 },
  };

  const imageVariants = {
    visible: {
      opacity: 1,
      x: 0,
      scale: 1.2,
      transition: { duration: 0.8 },
    },
    hidden: { opacity: 0, x: 50, scale: 1 },
  };

  const animateFromBottom = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 50 },
  };

  const animateSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  const faculty = animateSection();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.introductionContainer}>
        <motion.div
          className={classes.headingContainer}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className={classes.mainHeading}
          >
            Introducing Ayaan's Motion Academy
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariants_2}
            className={classes.subHeading}
          >
            Every Scroll Reveals New Paths to Success and Possibility
          </motion.div>
        </motion.div>
        <motion.img
          className={classes.introductionImage}
          src={image}
          alt="image"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        />
      </div>
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
        <PageEndingText
          color="#201F23"
          mainHeader={
            "In the heart of Ranchi, at the bustling Hariom Tower, lies a cradle of academic excellence and innovation - Ayaan's Motion Academy. Founded with the vision to empower and inspire, our academy has become a beacon of hope and success for aspirants of IIT/JEE, NEET, NDA, NTSE, and board examinations. At Ayaan's Motion Academy, we believe in unlocking the potential within each student, guiding them on a journey of discovery, learning, and unparalleled achievements."
          }
        />
      </motion.div>
      <motion.div
        className={classes.facultyContainer}
        ref={faculty.ref}
        initial="hidden"
        animate={faculty.controls}
        variants={containerVariants}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants_2}
          className={classes.facultyHeadingContainer}
        >
          <div className={classes.facultyHeading}>Expert Faculty: The Pillars of Our Success</div>
          {isSmallScreen && (
            <motion.img
              src={image2}
              alt="Faculty Group"
              initial="hidden"
              animate={faculty.controls}
              variants={imageVariants}
              className={classes.facultyImage}
            />
          )}
          <div className={classes.facultySubHeading}>
            Our distinguished faculty, led by the renowned Ayaan sir, a mathematics virtuoso, forms the backbone of our
            academy. Comprising subject matter experts, seasoned educators, and industry veterans, our faculty brings a
            wealth of knowledge, experience, and passion to the classroom. Through innovative teaching methods,
            interactive sessions, and a mentorship-driven approach, they are committed to guiding students towards
            academic excellence and personal growth.
          </div>
        </motion.div>
        {!isSmallScreen && (
          <motion.img
            src={image2}
            alt="Faculty Group"
            initial="hidden"
            animate={faculty.controls}
            variants={imageVariants}
            className={classes.facultyImage}
          />
        )}
      </motion.div>
      <div className={classes.inspireContainer}>
        {inspireSections.map((section) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

          React.useEffect(() => {
            if (inView) {
              controls.start("visible");
            }
          }, [controls, inView]);

          return (
            <motion.div
              key={section.id}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={animateFromBottom}
              className={classes.inspireInnerContainer}
            >
              <div className={classes.inspireHeading}>{section.title}</div>
              <div className={classes.inspireDetails}>{section.content}</div>
            </motion.div>
          );
        })}
      </div>
      <div>
        <PolicyText mainHeader={"Join Us: Embark on Your Journey to Success"} details={Details} />
        <Button
          variant="outline"
          label="View Our Batches "
          icon={<ArrowIcon />}
          onClick={() => navigation("/our-batches")}
        />
      </div>
    </div>
  );
};
