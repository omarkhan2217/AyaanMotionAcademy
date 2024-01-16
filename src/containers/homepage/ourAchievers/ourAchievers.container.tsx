import React from "react";
import { StudentCard } from "../../../components";
import IMG from '../../../assets/images/homepage/image15.png'
import classes from './ourAchievers.module.scss'

export const OurAchieversContainer: React.FC = () => {

    return (
        <div className={classes.mainContainer}>
            <StudentCard college="IIT DELHI" name="Ayush Kumar Paratha" rank={5} image={IMG} color="hsl(118, 98%, 25%)"/>
            <StudentCard college="IIT DELHI" name="Ayush Kumar Paratha" rank={5} image={IMG} />
            <StudentCard college="IIT DELHI" name="Ayush Kumar Paratha" rank={1346} image={IMG} />
            <StudentCard college="IIT MUMBAI" name="Ayush Kumar Paratha" rank={565} image={IMG} />
        </div>


    )
}