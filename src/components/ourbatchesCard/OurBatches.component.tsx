import React from "react";
import classes from "./ourbatches.module.scss";
import { ISBatchesCardProps } from "../../types";
import { Button } from "..";
import { ArrowIcon, CheckMark } from "../../assets";
import image2 from "../../assets/images/ourBatch/faculty icons.png";

interface IOurBatchesComponent extends ISBatchesCardProps {
  onClick: () => void;
}

export const OurBatchesComponent: React.FC<IOurBatchesComponent> = (props: IOurBatchesComponent) => {
  const { BatchName, grade, guide, image, isScholar, onClick, details } = props;

  return (
    <div className={isScholar ? classes.mainBorderContainer : classes.mainContainer}>
      {isScholar ? <div className={classes.topCard}>Most Popular</div> : null}
      <div className={classes.innerContainer}>
        <div className={classes.BatchName}>{BatchName}</div>
        <div className={classes.grade}>{grade}</div>
        <div className={classes.imageContairner}>
          <img src={image2} />
          <img src={image} />
          <div className={classes.guide}>{guide}</div>
        </div>
        <a
          target=" _blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfX8qDYv_rTh0dq6U9x6Z-DTHNR9FZ2H8ptPObGTFPmKYvmrw/viewform"
          className={classes.buttonContainer}
        >
          <Button label={isScholar ? "Register Now" : "Inquire Now"} size="md" />
        </a>
      </div>
      <div className={classes.detailsContainer}>
        {details.map((item) => {
          return (
            <div className={classes.innerDetails}>
              <CheckMark />
              {item.detail}
            </div>
          );
        })}
      </div>
      <div className={classes.button2}>
        <Button label="Know More" variant="outline" icon={<ArrowIcon />} onClick={onClick} />
      </div>
    </div>
  );
};
