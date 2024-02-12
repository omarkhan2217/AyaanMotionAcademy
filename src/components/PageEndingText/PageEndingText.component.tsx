import React from 'react'
import classes from './PageEndingText.module.scss'

export interface IPageEndingTextProps {
    mainHeader: string;
}

export const PageEndingText: React.FC<IPageEndingTextProps> = (props) => {
    const { mainHeader } = props;
    return (
        <div className={classes.container}>
            <div className={classes.mainHeader}>
                {mainHeader}
            </div>
        </div>
    );
}