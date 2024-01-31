/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import classses from './sectionText.module.scss';
import { Button } from '../../components';
import { ArrowIcon } from "../../assets";
import { useButtonResizeAlt } from '../../hooks';

export interface ISectionTextProps {
    header: string;
    subHeader?: string;
    hasButton?: boolean;
    buttonVariant?: "outline" | "primary";
    buttonText?: string;
    isButtonCentered?: boolean;
}

export const SectionText: React.FC<ISectionTextProps> = (props) => {
    const { header, subHeader, buttonText, buttonVariant = 'outline', hasButton, isButtonCentered = false } = props;
    return (
        <div className={isButtonCentered ? classses.innerContainerAlt : classses.innerContainer}>
            <div className={classses.mainHeading}>
                {header}
            </div>
            <div className={classses.quote}>{subHeader}</div>
            {hasButton ?
                <div className={isButtonCentered ? classses.buttonAlt : classses.button}>
                    <Button label={buttonText} variant={buttonVariant} icon={<ArrowIcon />} size={useButtonResizeAlt()} />
                </div>
                :
                null
            }
        </div>
    );
};
