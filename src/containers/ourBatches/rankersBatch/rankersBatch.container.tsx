import React from "react";
import classes from "./rankersbatch.module.scss";
import {
  BatchesFacultyComponent,
  BatchesFeatureCardComponent,
  BatchesIntroductionComponent,
  Button,
  PageText,
} from "../../../components";
import { rankersBatchData } from "../../../constants/batchesData/allBatchesData/rankersBatchData";

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
      <div className={classes.guideContainer}>Guided By Our Expert Faculty</div>
      <div className={classes.facultyContainer}>
        {data.faculty.map((faculty, index) => (
          <BatchesFacultyComponent key={index} {...faculty} />
        ))}
      </div>
      <PageText mainHeader={"Forge Your Path to Top Ranks with the RANKERS Batch"} studentIcon={false} />
      <a
        target=" _blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfX8qDYv_rTh0dq6U9x6Z-DTHNR9FZ2H8ptPObGTFPmKYvmrw/viewform"
        className={classes.button}
      >
        <Button variant="primary" label="Inquire Now" />
      </a>
    </div>
  );
};
