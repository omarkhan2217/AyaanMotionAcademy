import React from "react";
import { IPillProps } from "../../types";
import classes from './pill.module.scss';

export const CustomPill: React.FC<IPillProps> = (props: IPillProps) => {
    const { label } = props
    return (
        <div className={classes.mainContainer}>
            {label}
        </div>
    )
}