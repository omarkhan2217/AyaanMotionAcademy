import React from "react";
import { PageText, OtherStudentCard, PageEndingText } from "../../components";
import classes from "./ourAchievers.module.scss";
import { HighlightedStudentCard } from "../../components/highlightedStudentCard";
import { HighlightedAchieversData, OtherAchieversData } from "../../constants";
import { useWindowSize } from "usehooks-ts";

export const OurAchieversContainer: React.FC = () => {
  const { width } = useWindowSize();
  const isTablet = width <= 768;
  return (
    <div className={classes.mainContainer}>
      <PageText
        mainHeader="Beyond Boundaries Towards Brilliance"
        subHeader="Showcasing the Pioneers of Tomorrow, Today"
        hasButton={false}
      />
      <div className={classes.highlightedStudentCardContainer}>
        {HighlightedAchieversData.map((student) => {
          return (
            <HighlightedStudentCard
              key={student.id}
              name={student.name}
              description={student.description}
              rank={student.rank}
              image={isTablet ? student.altImage : student.image}
              isReversed={student.isReversed}
            />
          );
        })}
      </div>
      <PageText mainHeader={"Our Achievers: Paving Paths, Setting Records"} />
      <div className={classes.otherStudentCard}>
        {OtherAchieversData.map((item, index) => {
          return (
            <OtherStudentCard
              rank={item.rank}
              college={item.college}
              image={item.image}
              name={item.name}
              stream={item.stream}
              key={index}
            />
          );
        })}
      </div>
      <PageEndingText
        mainHeader={
          "Discover the brilliance within our accomplished achievers who soared to All India Ranks (AIR) in IIT/JEE. Their inspiring journeys, guided by expert mentors at Ayaan's Motion Academy, stand testament to the transformative education we offer. Join us, dream big, and let your success story be the next constellation in our Hall of Achievers."
        }
      />
    </div>
  );
};
