import IMG from '../../assets/images/ourAchievers/Rectangle 56.png'
import IMG2 from '../../assets/images/ourAchievers/Rectangle 57.png'
import { IHighlightedAchieverProps } from '../../types';

export const HighlightedAchieversData: IHighlightedAchieverProps[] = [
    {
        rank: 3,
        id: 1,
        name: 'Aushutosh Singh',
        image: IMG ,
        description: `In the constellation of brilliant minds that Ayaan's 
        Motion Academy takes pride in, Aushutosh Singh shines as one of the brightest stars. 
        With an astounding All India Rank of 03 in the IIT/JEE entrance exam, 
        Aushutosh has set a benchmark for excellence, dedication, and perseverance. 
        His journey from a curious learner to a national top ranker is a source of inspiration 
        for every aspirant dreaming of conquering the competitive exam skies.`,
    },
    {
        rank: 5,
        id: 2,
        name: 'Riya Gupta',
        image: IMG2,
        description: `In the constellation of brilliant minds that Ayaan's Motion Academy takes pride in, Riya Gupta emerges as a stellar achiever, securing an impressive All India Rank of 05 in the IIT/JEE entrance exam. Riya's journey symbolizes resilience, brilliance, and the power of unwavering dedication. Her remarkable achievements inspire aspiring minds to reach for the stars.`,
        isReversed: true,
    },
];