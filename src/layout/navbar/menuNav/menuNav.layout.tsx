import React from "react";
import classes from "./menuNav.module.scss";
import { Button } from "../../../components";
import { Menu } from ".";
import { useWindowSize } from "usehooks-ts";

export const MenuNav: React.FC = () => {
  const { width } = useWindowSize();
  return (
    <div className={classes.menuContainer}>
       <a
        target=" _blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfX8qDYv_rTh0dq6U9x6Z-DTHNR9FZ2H8ptPObGTFPmKYvmrw/viewform"
        className={classes.buttonContainer}
      >
        <Button label="Book a Demo" size={width <= 576 ? "sm" : "md"} />
      </a>
      <Menu />
    </div>
  );
};
