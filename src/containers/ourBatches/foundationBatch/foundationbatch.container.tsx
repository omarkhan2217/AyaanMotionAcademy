import React from 'react';
import classes from './foundationbatch.module.scss';
import { BatchesFacultyComponent, BatchesFeatureCardComponent, BatchesIntroductionComponent } from '../../../components';
import { foundationBatchData } from '../../../constants/batchesData/allBatchesData/foundationBatchData';


export const FoundationBatchContainer: React.FC = () => {
  const data = foundationBatchData.foundationBatch;

  return (
    <div className={classes.mainContainer}>
      <BatchesIntroductionComponent {...data.introduction} />
      <div className={classes.featureContainer}>

        {data.featureCard.map((featureCard, index) => (
          <BatchesFeatureCardComponent key={index} {...featureCard} />
        ))}
      </div>
      
      <div className={classes.facultyContainerr}>
        {data.faculty.map((faculty, index) => (
          <BatchesFacultyComponent key={index} {...faculty} />
        ))}
      </div>
    </div>
  );
};
