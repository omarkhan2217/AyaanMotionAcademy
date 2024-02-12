import React from "react";
import classes from './ourFaculty.module.scss'
import {  PageText,PageEndingText, OtherStudentCard } from "../../components";
import Img from '../../assets/images/homepage/Frame 45.png';
import { OurFacultyData } from "../../constants";


export const OurFacultyContainer:React.FC=()=>{
    return(
        <div className={classes.mainContainer}>
            <PageText mainHeader={"Guiding Stars, Building Futures"} 
            subHeader={"Meet the Exceptional Faculty Behind Ayaan's Motion Academy's Success Stories!"}/>
                <img  className={classes.TeachersImage} src={Img} alt="teachers-Image" />
            <PageText mainHeader={"Meet Our Expert Faculty"} 
            subHeader={"Meet our esteemed faculty members who are the backbone of Ayaan's Motion Academy. "}/>
            <div className={classes.facultyContainer}>
            {OurFacultyData.map((item)=>{
                    return(
                    <OtherStudentCard
                    name={item.name}
                    image= {item.image}
                    college={item.details}
                    isFacultyCard={true}
                    />)
                })}
            </div>
            <PageEndingText mainHeader={'Each member of our faculty brings a wealth of knowledge, expertise, and dedication to their respective fields, ensuring an enriching learning experience for every student. With years of experience and a passion for teaching, our faculty members go above and beyond to nurture talent, inspire curiosity, and empower students to reach their full potential. Get to know our exceptional educators and discover the difference they make in shaping the future leaders of tomorrow.'}/>
        </div>
)
}