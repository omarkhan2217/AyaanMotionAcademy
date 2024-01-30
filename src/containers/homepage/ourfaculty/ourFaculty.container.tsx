import React from 'react';
import classses from './ourFaculty.module.scss';
import { Button, OurFaculty } from '../../../components';
import { OurFacultyData } from '.';
import { ArrowIcon } from "../../../assets";
import { useButtonResizeAlt } from '../../../hooks';


export const OurFacultycontainer: React.FC = () => {
  return (
    <div className={classses.container}>
      <div className={classses.innerContainer}>
        <div className={classses.mainHeading}>
          Meet Our Expert Faculty.
        </div>
        <div className={classses.quote}>Passionate and Highly Qualified Teachers Dedicated to Your Success in Achieving Academic Excellence.</div>
        <div className={classses.button}><Button label="Know More" variant="outline" icon={<ArrowIcon />} size={useButtonResizeAlt()} /></div>
      </div>

      <div className={classses.imagecontainer}>
        {OurFacultyData.map((item, index) => {
          return (
            <OurFaculty key={index} image2={item.image2} image={item.image} />
          )
        })}
      </div>
    </div>
  );
};
