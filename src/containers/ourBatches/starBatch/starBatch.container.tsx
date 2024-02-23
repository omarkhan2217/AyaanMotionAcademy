import React from 'react';
import classes from './starbatch.module.scss';
import { BatchesFacultyComponent, BatchesFeatureCardComponent, BatchesIntroductionComponent, Button, PageText } from '../../../components';
import { starBatchData } from '../../../constants/batchesData/allBatchesData/starBatchData';


export const StarBatchContainer: React.FC = () => {
  const data = starBatchData.starBatch;

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
      <PageText mainHeader={'Elevate Your Board Exam Preparation with the STAR Batch'} />
      <div className={classes.button}>
        <Button variant='primary' label='Inqure Now' />
      </div>
    </div>
  );
};
