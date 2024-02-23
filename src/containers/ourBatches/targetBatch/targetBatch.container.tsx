import React from 'react';
import classes from './targetbatch.module.scss';
import { BatchesFacultyComponent, BatchesFeatureCardComponent, BatchesIntroductionComponent, Button, PageText } from '../../../components';
import { targetBatchData } from '../../../constants/batchesData/allBatchesData/targetBatchData';


export const TargetBatchContainer: React.FC = () => {
  const data = targetBatchData.targetBatch;

  return (
    <div className={classes.mainContainer}>
      <BatchesIntroductionComponent {...data.introduction} />
      <div className={classes.featureContainer}>

        {data.featureCard.map((featureCard, index) => (
          <BatchesFeatureCardComponent key={index} {...featureCard} />
        ))}
      </div>
      <div className={classes.guideContainer}>
      Guided By Our Expert Faculty
      </div>
      <div className={classes.facultyContainer}>
        {data.faculty.map((faculty, index) => (
          <BatchesFacultyComponent key={index} {...faculty} />
        ))}
      </div>
      <PageText mainHeader={'Accelerate Your JEE/NEET Preparation with the TARGET Batch'} />
      <div className={classes.button}>
        <Button variant='primary' label='Inqure Now' />
      </div>
    </div>
  );
};
