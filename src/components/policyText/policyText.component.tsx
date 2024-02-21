import React from "react"
import classes from "./policyText.module.scss";
import { IPrivacyPolicyProps } from "../../containers";

export interface IPolicyTextProps {
    mainHeader: string;
    details: IPrivacyPolicyProps[];
}
export const PolicyText: React.FC<IPolicyTextProps> = (props) => {
    const { mainHeader, details } = props;
    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainHeader}>
                {mainHeader}
            </div>
            {details.map((item) => {
                return (
                    <div className={classes.details}>
                        {item.text}
                    </div>
                )
            })
            }
        </div>
    );
}