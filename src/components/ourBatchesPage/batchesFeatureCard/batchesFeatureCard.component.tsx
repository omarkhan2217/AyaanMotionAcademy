import React from 'react'
import classes from './batchesFeatureCard.module.scss'

export interface IBatchesFeatureCardProps{
    heading:string;
    details:string;

}

export const BatchesFeatureCardComponent: React.FC<IBatchesFeatureCardProps> = (props) => {
    const {heading,details}=props;
    return (
        <div className={classes.batchFeatureContainer}>
                <div className={classes.featureHeading}>{heading}</div>
                <div className={classes.featureDetails}>{details}</div>
        </div>
    )
}
