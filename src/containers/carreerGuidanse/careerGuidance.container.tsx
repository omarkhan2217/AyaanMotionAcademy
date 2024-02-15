import React from 'react'
import classes from './careerGuidance.module.scss';
import Image from '../../assets/images/careerGuidace/Rectangle 56 (2).png'


export const CareerGuidanceContainer: React.FC = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.introductionContainer}>
        <div className={classes.introductionHeadingContainer}>
          <div className={classes.introductionHeading}>Navigating Your Path to Success</div>
          <div className={classes.introductionSubHeading}>Career Guidance at Ayaan's Motion Academy</div>
        </div>
        <img className={classes.introductionImage} src={Image} alt="papa ka para" />
      </div>
    </div>
  )
}