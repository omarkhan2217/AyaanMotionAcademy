import React from "react";
import { IStudentCardProps } from "../../types";
import classes from './mainStudentCard.module.scss';
import { CustomPill } from "..";

export const MainStudentCard: React.FC<IStudentCardProps> = (props: IStudentCardProps) => {
    const { rank, name, college, image, color="hsl(162, 30%, 41%)" , pillColor } = props
    return (
        <div className={classes.mainContainer} style={{backgroundColor: color}}>
            <div className={classes.textMainContainer} >
                <CustomPill label={`JEE-MAIN 2024${rank}`} pillColor={pillColor}/>
                <div className={classes.textContainer}>
                    <div className={classes.studentName}>{name}</div>
                    <div className={classes.collegeName}>{college}</div>
                </div>
            </div>
            <img className={classes.img} src={image} />
        </div>
    )
}

