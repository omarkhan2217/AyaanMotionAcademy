import React from "react"
import { HeroTextContainer, OurAchieversContainer } from "."
import classes from './homepage.module.scss';

export const HomePageContainer: React.FC = () => {

    return (
        <div className={classes.mainContainer}>
            <HeroTextContainer />
            <OurAchieversContainer />
        </div>

    )
}