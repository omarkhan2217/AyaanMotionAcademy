import React from "react"
import classes from "./heroText.module.scss";
import { Button } from "../../../components";
import { useButtonResizeAlt } from "../../../hooks";

export const HeroTextContainer: React.FC = () => {
    return (
        <div className={classes.container}>
            <div className={classes.mainHeader}>
                Empowering Dreams, Achieving Excellence.
            </div>
            <div className={classes.subHeader}>
            Meet Our JEE/IIT Achievers – Click to Discover Their Journeys, Percentiles, and Inspiring Quotes.
            </div>
            <div className={classes.buttonContainer}>
                <Button label="View all Achivers" size={useButtonResizeAlt()} />
            </div>
        </div>
    );
}