import React from 'react'
import classes from './ourbatches.module.scss'
import { ISBatchesCardProps } from '../../types'
import { Button } from '..'
import { ArrowIcon, BatchStudentIcon, CheckMark } from '../../assets'

interface OurBatchesComponent extends ISBatchesCardProps {
  onClick: () => void;
}

export const OurBatchesComponent: React.FC<OurBatchesComponent> = (props: OurBatchesComponent) => {
  const { BatchName, grade, guide, image, isScholar, onClick } = props;

  return (
    <div className={isScholar ? classes.mainBorderContainer : classes.mainContainer}>
      {isScholar ? <div className={classes.topCard}>Most Popular</div> : null}
      <div className={classes.innerContainer}>
        <div className={classes.BatchName}>{BatchName}</div>
        <div className={classes.grade}>{grade}</div>
        <div className={classes.imageContairner}>
          <BatchStudentIcon /><img src={image} alt={BatchName} />
          <div className={classes.guide}>{guide}</div>
        </div>
        <div className={classes.buttonContainer}>
          <Button label={isScholar ? "Register Now" : "Inquire Now"} size="md" />
        </div>
      </div>
      <div className={classes.detailsContainer}>
        <div className={classes.innerDetails}><CheckMark />Expert Faculty</div>
        <div className={classes.innerDetails}><CheckMark />Specialized Competitive Modules</div>
        <div className={classes.innerDetails}><CheckMark />High-Frequency Testing</div>
        <div className={classes.innerDetails}><CheckMark />Expert Guest Lectures</div>
        <div className={classes.innerDetails}><CheckMark />Personalized Academic Planning</div>
        <div className={classes.innerDetails}><CheckMark />Exclusive Workshops</div>
      </div>
      <div className={classes.button2}>
        <Button label='Know More' variant='outline' icon={<ArrowIcon />} onClick={onClick} />
      </div>
    </div>
  );
};
