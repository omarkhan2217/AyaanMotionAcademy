import React from 'react';
import classes from './scholarbatch.module.scss';
import { BatchesFacultyComponent, BatchesFeatureCardComponent, BatchesIntroductionComponent } from '../../../components';
import { scholarBatchData } from '../../../constants/batchesData/allBatchesData/scholarBatchData';


export const ScholarBatchContainer: React.FC = () => {
  const data = scholarBatchData.scholarBatch;

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
