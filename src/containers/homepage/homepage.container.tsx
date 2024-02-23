import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AboutUsSection,
  FaqContainer,
  OurAchieversSection,
  OurFacultySection,
  Ourbatchescontainer,
  TestimonialContainer,
} from ".";
import classes from "./homepage.module.scss";
import { PageText } from "../../components";

export const HomePageContainer: React.FC = () => {
  const navigation = useNavigate();
  return (
    <div className={classes.mainContainer}>
      <PageText
        mainHeader="Empowering Dreams, Achieving Excellence."
        subHeader="Elevate Your Potential at Ayaan's Motion Academy – Explore Success Stories of JEE/IIT Qualifiers below."
        buttonText="View All Achievers"
        onClick={() => navigation("/our-achievers")}
        hasButton
      />
      <OurAchieversSection />
      <AboutUsSection />
      <OurFacultySection />
      <Ourbatchescontainer />
      <TestimonialContainer />
      <FaqContainer />
    </div>
  );
};
