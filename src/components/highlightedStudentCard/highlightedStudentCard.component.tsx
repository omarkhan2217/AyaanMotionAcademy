import React from "react";
import classes from "./highlightedStudentCard.module.scss";
import { CustomPill } from "..";
import { IHighlightedStudentCardProps } from "../../types";
import { useWindowSize } from "usehooks-ts";
import IMG from './faculty icons (1).png';

export const HighlightedStudentCard: React.FC<IHighlightedStudentCardProps> = (props) => {
  const { rank, name, description, image, color, pillColor, bgColor,bgColorWhite, isReversed = false } = props;
  const { width } = useWindowSize();
  const isTablet = width <= 768;
  return (
    <div className={classes.mainContainer} style={isTablet ? { backgroundColor: bgColorWhite } : {backgroundColor:bgColor}}>
      {!isReversed ? (
        <img className={isReversed ? classes.imgAlt : classes.img} src={image} />
      ) : isReversed && isTablet ? (
        <img className={isReversed ? classes.imgAlt : classes.img} src={image} />
      ) : null}
      <div className={isReversed ? classes.textMainContaienrAlt : classes.textMainContainer}>
        <CustomPill pillColor={pillColor} label={`${rank}`} style={{ backgroundColor: pillColor }} />
        <div
          className={isReversed ? classes.textContainerAlt : classes.textContainer}
          style={{ color: isReversed ? "#4B0202" : color }}
        >
          <div className={isReversed ? classes.studentNameAlt : classes.studentName}>{name}</div>
          <div className={isReversed ? classes.collegeNameAlt : classes.collegeName}>{description}</div>
          <div className={isReversed ? classes.studentNameAlt : classes.studentName}>Guided by our expert faculty</div>
          <img src={IMG} />
        </div>
      </div>
      {isReversed && !isTablet ? <img className={isReversed ? classes.imgAlt : classes.img} src={image} /> : null}
    </div>
  );
};
