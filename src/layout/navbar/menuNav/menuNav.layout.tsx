import React from "react";
import classes from "./menuNav.module.scss";
import { Button } from "../../../components";
import { Menu } from ".";
import { useWindowSize } from "usehooks-ts";

export const MenuNav: React.FC = () => {
  const { width } = useWindowSize();
  return (
    <div className={classes.menuContainer}>
      <div className={classes.buttonContainer}>
        <Button label="Book a Demo" size={width <= 576 ? "sm" : "md"} />
      </div>
      <Menu />
    </div>
  );
};
