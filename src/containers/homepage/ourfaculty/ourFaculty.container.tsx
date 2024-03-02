import React from "react";
import classes from "./ourFaculty.module.scss";
import { SectionText } from "../../../components";
import IMG from "../../../assets/images/aboutUs/Group 50 (1).png";
import { useWindowSize } from "usehooks-ts";
import { useNavigate } from "react-router-dom";

export const OurFacultySection: React.FC = () => {
  const navigation = useNavigate();
  const width = useWindowSize().width;
  return (
    <div className={classes.container}>
      <SectionText
        mainHeader="Meet Our Expert Faculty."
        subHeader="Passionate and Highly Qualified Teachers Dedicated to Your Success in Achieving Academic Excellence."
        hasButton
        buttonText="Know More"
        onClick={() => navigation("/our-faculty")}
        isButtonCentered={width <= 930 ? true : false}
      />
      <link href="/faculty" />
      <div className={classes.imageContainer}>
        <img src={IMG} alt="teachers image" className={classes.frontImage} />
      </div>
    </div>
  );
};
