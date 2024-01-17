import React from 'react'
import classses from './ourFaculty.module.scss'


export const OurFacultycontainer: React.FC = () => {
  return (
    <div className={classses.container}>
      <div className={classses.innerContainer}>
        <div className={classses.mainHeading}>
          Meet Our Expert Faculty.
        </div>
        <div className={classses.quote}>Meet Our JEE/IIT Achievers – Click to Discover Their Journeys, Percentiles, and Inspiring Quotes.</div>
      </div>
    </div>
  );
}
