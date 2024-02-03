import React from "react"
import { AboutUscontainer, FaqContainer, OurAchieversSection, OurFacultyContainer, Ourbatchescontainer, TestimonialContainer } from "."
import classes from './homepage.module.scss';
import { PageText } from "../../components";


export const HomePageContainer: React.FC = () => {
    return (
        <div className={classes.mainContainer}>
            <PageText
                mainHeader="Empowering Dreams, Achieving Excellence."
                subHeader="Elevate Your Potential at Ayaan's Motion Academy – Explore Success Stories of JEE/IIT Qualifiers below."
                hasButton buttonText="View all Achievers"
            />
            <OurAchieversSection />
            <AboutUscontainer />
            <OurFacultyContainer />
            <Ourbatchescontainer/>
            <TestimonialContainer />
            <FaqContainer />
        </div>

    )
}