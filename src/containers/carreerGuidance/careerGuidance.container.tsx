import React from "react";
import classes from "./careerGuidance.module.scss";
import Image from "../../assets/images/careerGuidace/Rectangle 56 (7).png";
import bgImage from "../../assets/images/careerGuidace/Vector 12.png";
import { Button, CareerGuidanceText } from "../../components";

export const CareerGuidanceContainer: React.FC = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.introductionContainer}>
        <div className={classes.introductionHeadingContainer}>
          <div className={classes.introductionHeading}>Navigating Your Path to Success</div>
          <div className={classes.introductionSubHeading}>Career Guidance at Ayaan's Motion Academy</div>
        </div>
        <img className={classes.introductionBgImage} src={bgImage} alt="background" />
        <img className={classes.introductionImage} src={Image} alt="boy-image" />
      </div>
      <CareerGuidanceText
        mainHeader={"Why Choose Us for Your Career Journey"}
        subHeader={
          "In today’s rapidly evolving world, the path to a successful career is more complex than ever before. At Ayaan's Motion Academy, we understand the challenges and opportunities that lie ahead for our students. Our dedicated Career Guidance program is designed not just to prepare you for exams but to equip you with the knowledge, skills, and insights needed to navigate your future career with confidence and clarity."
        }
      />
      <CareerGuidanceText
        mainHeader={"Tailored Guidance for Every Aspirant"}
        subHeader={
          "Our approach to career guidance is deeply personalized. We recognize that each student possesses unique talents, interests, and aspirations. Our team of experienced educators and career counselors work closely with you to uncover your potential, aligning your academic journey with your long-term career goals. Here’s how we make a difference:"
        }
      />
      <div className={classes.guidingContainer}>
        <div className={classes.scholarshipContainer}>
          <div className={classes.guidingHeader}>University and Scholarship Guidance:</div>
          <div className={classes.guidingSubHeader}>
            Navigating higher education options can be daunting. Our advisors provide comprehensive support, from
            selecting the right university and course to applying for scholarships and financial aid.
          </div>
        </div>
        <div className={classes.counselingContainer}>
          <div className={classes.guidingHeader}>One-on-One Career Counseling:</div>
          <div className={classes.guidingSubHeader}>
            Personalized counseling sessions offer a safe space to explore your aspirations, address your concerns, and
            refine your career objectives. Our counselors are dedicated to helping you chart a course that’s true to
            your individual path.
          </div>
        </div>
      </div>
      <CareerGuidanceText
        mainHeader={"Quality Education: The Foundation of Your Future"}
        subHeader={
          "At Ayaan's Motion Academy, quality education is at the heart of everything we do. Our rigorous academic programs, expert faculty, and state-of-the-art learning resources are designed to provide you with a solid educational foundation. But we go beyond academics to ensure you are well-prepared for the challenges and opportunities of the future workplace."
        }
      />
      <CareerGuidanceText
        mainHeader={"Your Journey Starts Here"}
        subHeader={
          "Choosing a career is one of the most significant decisions you will make. At Ayaan's Motion Academy, we are committed to guiding you through this journey, providing the support, resources, and inspiration you need to achieve your dreams. Let us help you unlock your potential and pave the way to a successful and fulfilling career."
        }
      />
      <a
        target=" _blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfX8qDYv_rTh0dq6U9x6Z-DTHNR9FZ2H8ptPObGTFPmKYvmrw/viewform"
        className={classes.button}
      >
        <Button label="Inquire Now" />
      </a>
    </div>
  );
};
