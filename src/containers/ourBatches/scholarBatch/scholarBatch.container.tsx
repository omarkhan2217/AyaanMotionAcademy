import React from 'react';
import classes from './scholarbatch.module.scss';
import { BatchesFacultyComponent, BatchesFeatureCardComponent, BatchesIntroductionComponent, Button, PageText } from '../../../components';
import { scholarBatchData } from '../../../constants/batchesData/allBatchesData/scholarBatchData';


export const ScholarBatchContainer: React.FC = () => {
  const data = scholarBatchData.scholarBatch;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.introductionContainer}>
      <BatchesIntroductionComponent {...data.introduction} />
      </div>
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
      <PageText mainHeader={'Master Competitive Exams with Our SCHOLAR Batch'} />
      <div className={classes.button}>
        <Button variant='primary' label='Inqure Now' />
      </div>
    </div>
  );
};
