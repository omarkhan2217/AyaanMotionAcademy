import React from 'react'
import classes from './ourBatchesFaculty.module.scss'

export interface IBatchesFacultyProps{
    image:string;
    facultyName:string;
    facultySubject:string;
    informationText:string;

}
export  const BatchesFacultyComponent:React.FC<IBatchesFacultyProps> = (props) => {
    const {image,facultyName,facultySubject,informationText}=props
  return (
    <div className={classes.mainContainer}>
        <div className={classes.facultyContainer}>
            <div className={classes.image}>{image}</div>
            <div className={classes.facultyName}>{facultyName}</div>
            <div className={classes.facultySubject}>{facultySubject}</div>
        </div>
        <div className={classes.informationText}>{informationText}</div>
    </div>
  )
}
