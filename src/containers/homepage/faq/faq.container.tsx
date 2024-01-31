import React from 'react';
import classes from './faq.module.scss';
import {  FAQComponent, SectionText } from "../../../components";
import { FaqData } from "./faq.data";

export const FaqContainer: React.FC = () => {
    return (
        <div className={classes.mainContainer}>
            <SectionText header="Frequently Asked Questions" isButtonCentered />
            {FaqData.map((item, index) => (
                <FAQComponent key={index} question={item.question} answer={item.answer} />
            ))
            }
        </div>
    );
}
