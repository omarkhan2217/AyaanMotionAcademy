import React from "react";
import { IStudentCardProps } from "../../types";
import classes from './studentCard.module.scss';
import { CustomPill } from "..";

export const StudentCard: React.FC<IStudentCardProps> = (props: IStudentCardProps) => {
    const { rank, name, college, image, color="hsl(162, 30%, 41%)" } = props
    return (
        <div className={classes.mainContainer} style={{backgroundColor: color}}>
            <div className={classes.textMainContainer}>
                <CustomPill label={`AIR ${rank}`} />
                <div className={classes.textContainer}>
                    <div className={classes.studentName}>{name}</div>
                    <div className={classes.collegeName}>{college}</div>
                </div>
            </div>
            <img className={classes.img} src={image} />
        </div>
    )
}

// components/StudentCard/StudentCard.tsx
// import React from 'react';
// import classes from './StudentCard.module.scss';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { CustomPill } from '..'; 
// import { Student } from '../../types/components';

// interface StudentCardProps {
//   student: Student;
// }

// export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
//   const { rank, name, college, images, color = 'hsl(162, 30%, 41%)' } = student;

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className={classes.mainContainer} style={{ backgroundColor: color }}>
//       <Slider {...settings}>
//         {images.map((image: string | undefined, index: React.Key | null | undefined) => (
//           <div key={index}>
//             <div className={classes.textMainContainer}>
//               <CustomPill label={`AIR ${rank}`} />
//               <div className={classes.textContainer}>
//                 <div className={classes.studentName}>{name}</div>
//                 <div className={classes.collegeName}>{college}</div>
//               </div>
//             </div>
//             <img className={classes.img} src={image} alt={(`Slide ${index}`+ 1)} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };


