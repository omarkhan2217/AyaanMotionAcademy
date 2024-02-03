import React from 'react';
import classes from './ourFaculty.module.scss';
import { SectionText } from '../../../components';
import IMG from '../../../assets/images/homepage/image 21.png'
import IMG2 from '../../../assets/images/homepage/Vector 1.png'
import { useWindowSize } from 'usehooks-ts';


export const OurFacultyContainer: React.FC = () => {
  const width = useWindowSize().width;
  return (
    <div className={classes.container}>
      <img src={IMG2} alt='background' className={classes.backgroundSvg} />
      <SectionText
        header='Meet Our Expert Faculty.'
        subHeader='Passionate and Highly Qualified Teachers Dedicated to Your Success in Achieving Academic Excellence.'
        hasButton
        buttonText='Know More'
        isButtonCentered={width <= 930 ? true : false}
        />
      <div className={classes.imageContainer}>
        <img src={IMG} alt='teachers image' className={classes.frontImage} />
      </div>
    </div>
  );
};


