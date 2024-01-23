import React from 'react';
import classses from './ourFaculty.module.scss';
import { OurFaculty } from '../../../components';
import { OurFacultyData } from '.';

export const OurFacultycontainer: React.FC = () => {
  return (
    <div className={classses.container}>
      <div className={classses.innerContainer}>
        <div className={classses.mainHeading}>
          Meet Our Expert Faculty.
        </div>
        <div className={classses.quote}>Passionate and Highly Qualified Teachers Dedicated to Your Success in Achieving Academic Excellence.</div>
      </div>
      <div className={classses.imagecontainer}>
      {OurFacultyData.map((item) => {
        return (

          <OurFaculty  image2={item.image2} image={item.image}/>
        )
      })}
      </div>
    </div>
  );
};
