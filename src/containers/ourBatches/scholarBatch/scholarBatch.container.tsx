import React from "react";
import classes from "./scholarBatch.module.scss";
import {
  BatchesFacultyComponent,
  BatchesFeatureCardComponent,
  BatchesIntroductionComponent,
  Button,
  PageText,
} from "../../../components";
import { scholarBatchData } from "../../../constants/batchesData/allBatchesData/scholarBatchData";

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
      <div className={classes.guideContainer}>Guided By Our Expert Faculty</div>
      <div className={classes.facultyContainer}>
        {data.faculty.map((faculty, index) => (
          <BatchesFacultyComponent key={index} {...faculty} />
        ))}
      </div>
      <PageText mainHeader={"Master Competitive Exams with Our SCHOLAR Batch"} studentIcon={false} />
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
