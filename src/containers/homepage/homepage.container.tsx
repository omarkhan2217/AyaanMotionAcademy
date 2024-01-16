import React from "react"
import { OurAchieversContainer } from "./ourAchievers/ourAchievers.container"
import { HeroTextContainer } from "."
import classes from './homepage.module.scss';

export const HomePageContainer: React.FC = () => {

    return (
        <div className={classes.mainContainer}>
            <HeroTextContainer />
            <OurAchieversContainer />
        </div>

    )
}