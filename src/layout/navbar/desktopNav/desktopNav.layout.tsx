import React from "react";
import classes from "./desktopNav.module.scss";
import { NavbarData } from "../../../constants";
import { Link } from "react-router-dom";
import { Button } from "../../../components";

export const DesktopNav: React.FC = () => {
  return (
    <div className={classes.mainContainer}>
      {NavbarData.map((item, index) => {
        return (
          <Link key={Math.random() * index} className={classes.link} to={item.linkTo}>
            {item.label}
          </Link>
        );
      })}
      <a
        target=" _blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfX8qDYv_rTh0dq6U9x6Z-DTHNR9FZ2H8ptPObGTFPmKYvmrw/viewform"
        className={classes.buttonContainer}
      >
        <Button label="Book a Demo" size="md" />
      </a>
    </div>
  );
};
