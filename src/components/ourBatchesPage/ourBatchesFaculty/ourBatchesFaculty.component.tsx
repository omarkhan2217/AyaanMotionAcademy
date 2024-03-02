import React from "react";
import classes from "./ourBatchesFaculty.module.scss";

export interface IBatchesFacultyProps {
  image: string;
  facultyName: string;
  facultySubject: string;
}
export const BatchesFacultyComponent: React.FC<IBatchesFacultyProps> = (props) => {
  const { image, facultyName, facultySubject } = props;
  return (
    <div className={classes.facultyContainer}>
      <img src={image} alt="image"  className={classes.facultyImage}/> 
      <div className={classes.facultyName}>{facultyName}</div>
      <div className={classes.facultySubject}>{facultySubject}</div>
    </div>
  );
};
