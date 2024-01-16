import React from "react";
import { IStudentCardProps } from "../../types";
import classes from './studentCard.module.scss';
import { CustomPill } from "..";

export const StudentCard: React.FC<IStudentCardProps> = (props: IStudentCardProps) => {
    const { rank, name, college, image, color="hsl(162, 30%, 41%)" } = props
    return (
        <div className={classes.mainContainer} style={{backgroundColor: color}}>
            <div className={classes.textMainContainer}>
                <CustomPill label={`AIR ${rank}`} />
                <div className={classes.textContainer}>
                    <div className={classes.studentName}>{name}</div>
                    <div className={classes.collegeName}>{college}</div>
                </div>
            </div>
            <img className={classes.img} src={image} />
        </div>
    )
}