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
                Join Ayaan's Motion Academy for top-tier coaching. Unleash your potential, conquer exams, and embark on a journey of academic excellence.
            </div>
            <div className={classes.buttonContainer}>
                <Button label="View all Achivers" size={useButtonResizeAlt()} />
            </div>
        </div>
    );
}