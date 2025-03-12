import React from "react";
import classes from "./lakshyaBatch.module.scss";
import {
  BatchesFacultyComponent,
  BatchesFeatureCardComponent,
  BatchesIntroductionComponent,
  Button,
  PageText,
} from "../../../components";
import { lakshyaBatchData } from "../../../constants/batchesData/allBatchesData/lakshyaBatchData";

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
      <div className={classes.guideContainer}>Guided By Our Expert Faculty</div>

      <div className={classes.facultyContainer}>
        {data.faculty.map((faculty, index) => (
          <BatchesFacultyComponent key={index} {...faculty} />
        ))}
      </div>
      <PageText mainHeader={"Reach the Pinnacle of Success with the LAKSHYA Batch"} studentIcon={false} />
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
