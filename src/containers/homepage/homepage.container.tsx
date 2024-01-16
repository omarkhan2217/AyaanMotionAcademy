import React from "react"
import { OurAchieversContainer } from "./ourAchievers/ourAchievers.container"
import { HeroText } from "."

export const HomePageContainer: React.FC = () => {

    return (
        <div>
            <OurAchieversContainer />
            <HeroText/>
        </div>

    )
}