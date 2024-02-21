/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import classes from "./pageText.module.scss";
import { Button } from "../../components";
import { useButtonResizeAlt } from "../../hooks";
import { ArrowIcon } from "../../assets";

export interface IPageTextProps {
    mainHeader: string;
    subHeader?: string;
    hasButton?: boolean;
    buttonText?: string;
    buttonVariant?: "outline" | "primary";
    children?: React.ReactNode;
    onClick?: () => void;
}

export const PageText: React.FC<IPageTextProps> = (props) => {
    const { mainHeader, subHeader, hasButton, buttonText, buttonVariant="outline", onClick } = props;
    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainHeader}>
                {mainHeader}
            </div>
            <div className={classes.subHeader}>
                {subHeader}
            </div>
            {hasButton ?
                <div className={classes.buttonContainer}>
                    <Button label={buttonText} variant={buttonVariant} onClick={onClick} icon={<ArrowIcon />} size={useButtonResizeAlt()} />
                </div>
                :
                null}
        </div>
    );
}