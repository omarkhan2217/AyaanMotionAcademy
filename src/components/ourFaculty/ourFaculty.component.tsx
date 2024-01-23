import React from 'react'
import classes from './ourFaculty.module.scss'
import { IourFacultyData } from '../../types'



export const OurFaculty: React.FC<IourFacultyData> = (props: IourFacultyData) => {
    const {image2,image}=props;
  return (

    <div className={classes.imgcontainer}>
       <img className={classes.teachers_image} src={image2} alt="teachers_image" />
       <img className={classes.bg_img} src={image}alt="back ground image" />
    </div >


  )
}
