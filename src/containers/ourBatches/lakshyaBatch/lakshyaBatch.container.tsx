import React from 'react';
import classes from './lakshyaBtach.module.scss';
import { BatchesFacultyComponent, BatchesFeatureCardComponent, BatchesIntroductionComponent } from '../../../components';
import { lakshyaBatchData } from '../../../constants/batchesData/allBatchesData/lakshyaBatchData';


export const LakshyaBatchContainer: React.FC = () => {
  const data = lakshyaBatchData.lakshyaBatch;

  return (
    <div className={classes.mainContainer}>
      <BatchesIntroductionComponent {...data.introduction} />
      <div className={classes.featureContainer}>

        {data.featureCard.map((featureCard, index) => (
          <BatchesFeatureCardComponent key={index} {...featureCard} />
        ))}
      </div>

      <div className={classes.facultyContainer}>
        {data.faculty.map((faculty, index) => (
          <BatchesFacultyComponent key={index} {...faculty} />
        ))}
      </div>
    </div>
  );
};
