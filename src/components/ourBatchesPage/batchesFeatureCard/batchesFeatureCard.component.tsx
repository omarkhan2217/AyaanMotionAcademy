import React from 'react'
import classes from './batchesFeatureCard.module.scss'

export interface IBatchesFeatureCardProps{
    heading:string;
    details:string;
    bgColor?:string;
    color?:string;
}

export const BatchesFeatureCardComponent: React.FC<IBatchesFeatureCardProps> = (props) => {
    const {heading,details ,bgColor="#0E2CE2",color}=props;
    return (
        <div className={classes.batchFeatureContainer}  style={{backgroundColor:bgColor}} >
                <div className={classes.featureHeading}  style={{color:color}} >{heading}</div>
                <div className={classes.featureDetails}  style={{color:color}}>{details}</div>
        </div>
    )
}
