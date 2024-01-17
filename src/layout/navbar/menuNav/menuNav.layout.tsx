import React from "react"
import classes from './menuNav.module.scss';
import { Button } from "../../../components";
import { Menu } from ".";

export const MenuNav: React.FC = () => {
    return (
        <div className={classes.menuContainer}>
            <div className={classes.buttonContainer}>
                <Button label="Book a Demo" size="md" />
            </div>
                <Menu />
        </div>

    )
}