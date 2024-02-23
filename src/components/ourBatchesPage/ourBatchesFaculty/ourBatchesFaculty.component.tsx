import React from 'react'
import classes from './ourBatchesFaculty.module.scss'

export interface IBatchesFacultyProps{
    image:string;
    facultyName:string;
    facultySubject:string;

}
export  const BatchesFacultyComponent:React.FC<IBatchesFacultyProps> = (props) => {
    const {image,facultyName,facultySubject,}=props
  return (
        <div className={classes.facultyContainer}>
            <div className={classes.facultyImage}>{image}</div>
            <div className={classes.facultyName}>{facultyName}</div>
            <div className={classes.facultySubject}>{facultySubject}</div>
        </div>
  )
}
