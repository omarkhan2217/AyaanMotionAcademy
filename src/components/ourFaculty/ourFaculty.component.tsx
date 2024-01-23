import React from 'react'
import classes from './ourFaculty.module.scss'
import { IourFacultyData } from '../../types'



export const OurFacultyData: React.FC<IourFacultyData> = (props: IourFacultyData) => {
    const {image2}=props;
  return (

    <div className={classes.imgcontainer}>
       <img src={image2} alt="teachers_image" />
    </div >


  )
}
