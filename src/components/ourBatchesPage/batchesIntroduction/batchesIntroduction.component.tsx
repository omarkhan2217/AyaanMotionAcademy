import React from 'react'
import classes from './batchesIntroduction.module.scss'

export interface IBatchesProps{
    heading:string;
    subHeading:string;
    image:string;
    pageText:string;
    bgColor?:string;
    headingColor?:string;
    

}
export  const BatchesIntroductionComponent:React.FC<IBatchesProps> = (props) => {
    const {heading,subHeading,image,pageText,bgColor, headingColor}=props
  return (
    <div className={classes.mainContainer}>
        <div className={classes.introductionContainer} style={{backgroundColor:bgColor}}>
            <div className={classes.introductionHeadingContainer}>
                <div className={classes.introductionHeader} style={{color:headingColor}}>{heading}</div>
                <div className={ classes.introductionSubHeader} style={{color:headingColor}}>{subHeading}</div>
            </div>
            <img className={classes.imageContainer} src={image}/>
        </div>
        <div className={classes.pageText}>{pageText}</div>
    </div>
  )
}
