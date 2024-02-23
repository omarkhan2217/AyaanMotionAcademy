import React from 'react';
import classes from './rankersbatch.module.scss';
import { BatchesFacultyComponent, BatchesFeatureCardComponent, BatchesIntroductionComponent, Button, PageText } from '../../../components';
import { rankersBatchData } from '../../../constants/batchesData/allBatchesData/rankersBatchData';


export const RankersBatchContainer: React.FC = () => {
  const data = rankersBatchData.rankersBatch;

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
      <PageText mainHeader={'Forge Your Path to Top Ranks with the RANKERS Batch'} />
      <div className={classes.button}>
        <Button variant='primary' label='Inqure Now' />
      </div>
    </div>
  );
};
