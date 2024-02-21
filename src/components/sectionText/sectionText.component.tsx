/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import classses from './sectionText.module.scss';
import { Button } from '../../components';
import { ArrowIcon } from "../../assets";
import { useButtonResizeAlt } from '../../hooks';

export interface ISectionTextProps {
    mainHeder: string;
    subHeader?: string;
    hasButton?: boolean;
    buttonVariant?: "outline" | "primary";
    buttonText?: string;
    isButtonCentered?: boolean;
    onClick:()=>void;
}

export const SectionText: React.FC<ISectionTextProps> = (props) => {
    const { mainHeder,onClick, subHeader, buttonText, buttonVariant = 'outline', hasButton = true, isButtonCentered = false } = props;
    return (
        <div className={isButtonCentered ? classses.innerContainerAlt : classses.innerContainer}>
            <div className={classses.mainHeading}>
                {mainHeder}
            </div>
            <div className={classses.subHeader}>{subHeader}</div>
            {hasButton ?
                <div className={isButtonCentered ? classses.buttonAlt : classses.button}>
                    <Button label={buttonText} variant={buttonVariant} icon={<ArrowIcon />}  onClick={onClick} size={useButtonResizeAlt()} />
                </div>
                :
                null
            }
        </div>
    );
};
