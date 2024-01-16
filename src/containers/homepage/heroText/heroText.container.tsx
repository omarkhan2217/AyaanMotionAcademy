import React from "react"
import classes from "./heroText.module.scss";
import { Button } from "../../../components";

export const HeroTextContainer: React.FC = () => {

    return (
        <div className={classes.container}>
            <div className={classes.MainHeader}>
                Ayaan's Motion Academy - <br />Your Gateway to Academic <br /> Excellence!
            </div>
            <div className={classes.subHeader}>
                Dive into the world of knowledge and opportunity at Ayaan's Motion Academy.
            </div>
            <div className={classes.buttonContainer}>
                <Button label="View all Achivers" size="md" />
            </div>
        </div>


    );
}