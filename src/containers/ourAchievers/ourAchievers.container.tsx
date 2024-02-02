import React from "react";
import { PageText, SectionText } from "../../components";
import classes from './ourAchievers.module.scss';
import { HighlightedStudentCard } from "../../components/highlightedStudentCard";
import { HighlightedAchieversData } from "../../constants";

export const OurAchieversContainer: React.FC = () => {
    return (
        <div className={classes.mainContainer}>
            <PageText
                mainHeader="Beyond Boundaries Towards Brilliance"
                subHeader="Showcasing the Pioneers of Tomorrow, Today"
                hasButton={false}
            />
            <div className={classes.highlightedStudentCardContainer}>
                {HighlightedAchieversData.map((student) => {
                    return (
                        <HighlightedStudentCard
                            key={student.id}
                            name={student.name}
                            description={student.description}
                            rank={student.rank}
                            image={student.image}
                            isReversed={student.isReversed}
                        />
                    )
                })}
            </div>
            <SectionText header="Our Achievers: Paving Paths, Setting Records"/>
        </div>
    )
}