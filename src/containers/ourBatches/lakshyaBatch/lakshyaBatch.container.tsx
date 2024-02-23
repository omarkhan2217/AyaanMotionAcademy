import React from 'react';
import classes from './lakshyaBtach.module.scss';
import { BatchesFacultyComponent, BatchesFeatureCardComponent, BatchesIntroductionComponent, Button, PageText } from '../../../components';
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
      <div className={classes.guideContainer}>
      Guided By Our Expert Faculty
      </div>

      <div className={classes.facultyContainer}>
        {data.faculty.map((faculty, index) => (
          <BatchesFacultyComponent key={index} {...faculty} />
        ))}
      </div>
      <PageText mainHeader={'Reach the Pinnacle of Success with the LAKSHYA Batch'} />
      <div className={classes.button}>
        <Button variant='primary' label='Inqure Now' />
      </div>
    </div>
  );
};
