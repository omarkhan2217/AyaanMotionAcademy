import React from "react";
import classes from './highlightedStudentCard.module.scss';
import { CustomPill } from "..";
import { IHighlightedStudentCardProps } from "../../types";
import { TeacherLogo } from "../../assets";

export const HighlightedStudentCard: React.FC<IHighlightedStudentCardProps> = (props) => {
    const { rank, name, description, image, isReversed = false } = props
    return (
        <div className={classes.mainContainer}>
            {isReversed ? null : <img className={isReversed ? classes.imgAlt : classes.img} src={image} />}
            <div className={isReversed ? classes.textMainContaienrAlt : classes.textMainContainer}>
                <CustomPill label={`AIR ${rank}`} />
                <div className={isReversed ? classes.textContainerAlt : classes.textContainer}>
                    <div className={isReversed ? classes.studentNameAlt : classes.studentName}>{name}</div>
                    <div className={isReversed ? classes.collegeNameAlt : classes.collegeName}>{description}</div>
                    <div className={isReversed ? classes.studentNameAlt : classes.studentName}>Guided by our expert faculty</div>
                    <TeacherLogo />
                </div>
            </div>
            {isReversed ? <img className={isReversed ? classes.imgAlt : classes.img} src={image} /> : null}
        </div>
    )
}

