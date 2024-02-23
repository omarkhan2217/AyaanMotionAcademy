import React from 'react'
import classes from './batchesIntroduction.module.scss'

export interface IBatchesProps{
    heading:string;
    subHeading:string;
    image:string;
    pageText:string;

}
export  const BatchesIntroductionComponent:React.FC<IBatchesProps> = (props) => {
    const {heading,subHeading,image,pageText}=props
  return (
    <div className={classes.mainContainer}>
        <div className={classes.introductionContainer}>
            <div className={classes.introductionHeadingContainer}>
                <div className={classes.introductionHeader}>{heading}</div>
                <div className={ classes.introductionSubHeader}>{subHeading}</div>
            </div>
            <img className={classes.imageContainer} src={image}/>
        </div>
        <div className={classes.pageText}>{pageText}</div>
    </div>
  )
}
