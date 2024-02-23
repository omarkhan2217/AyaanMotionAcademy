import React from "react";
import classes from "./PageEndingText.module.scss";

export interface IPageEndingTextProps {
  mainHeader: string;
  color?: string;
}

export const PageEndingText: React.FC<IPageEndingTextProps> = (props) => {
  const { mainHeader, color } = props;
  return (
    <div className={classes.mainContainer}>
      <div style={{ color: color }} className={classes.mainHeader}>
        {mainHeader}
      </div>
    </div>
  );
};
