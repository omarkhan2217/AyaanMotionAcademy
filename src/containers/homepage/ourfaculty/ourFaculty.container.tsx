import React from 'react'
import classses from './ourFaculty.module.scss'

export const OurFacultycontainer: React.FC = () => {
  return (
    <div className={classses.container}>
      <div className={classses.innerContainer}>
        <div className={classses.mainHeading}>
          Meet Our Expert Faculty.
        </div>
        <div className={classses.quote}>Passionate and Highly Qualified Teachers Dedicated to Your Success in Achieving Academic Excellence.</div>
      </div>
      <OurFacultycontainer />
    </div>
  );
}
