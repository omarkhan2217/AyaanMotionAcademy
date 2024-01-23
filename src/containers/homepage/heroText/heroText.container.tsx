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
            Elevate Your Potential at Ayaan's Motion Academy – Explore Success Stories of JEE/IIT Qualifiers below.
            </div>
            <div className={classes.buttonContainer}>
                <Button label="View all Achivers" size={useButtonResizeAlt()} />
            </div>
        </div>
    );
}