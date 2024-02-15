import React from 'react'
import classes from './careerGuidanceText.module.scss'

export interface ICareerGuidanceProps {
    mainHeader: string;
    subHeader:string;
}

export const CareerGuidanceText: React.FC <ICareerGuidanceProps> = (props) => {
    const { mainHeader,subHeader } = props;
    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainHeader}>
                {mainHeader}
            </div>
            <div className={classes.subHeader}>{subHeader}</div>
        </div>
    );
}