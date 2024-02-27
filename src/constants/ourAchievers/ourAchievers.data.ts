import MAINIMG1 from '../../assets/images/ourAchievers/Rectangle 56 (5).png'
import MAINIMG2 from '../../assets/images/ourAchievers/Rectangle 57 (2).png'
import MAINIMGPHONE1 from '../../assets/images/ourAchievers/for phone achiever1.png'
import MAINIMGPHONE2 from '../../assets/images/ourAchievers/for phone achiever2.png'
import IMG1 from '../../assets/images/ourAchievers/Akash Pramanik.jpg.png'
import IMG2 from '../../assets/images/ourAchievers/Harshit Norbert Joseph.jpg.png'
import IMG3 from '../../assets/images/ourAchievers/Nishant kumar.jpg.png'
import IMG4 from '../../assets/images/ourAchievers/Pranav Singh.jpg.png'
import IMG5 from '../../assets/images/ourAchievers/Tanishqua Jaiswal.jpg.png'
import IMG6 from '../../assets/images/ourAchievers/Shubham Kumar.jpg.png'
import IMG7 from '../../assets/images/ourAchievers/sumit kumar.jpg.png'
import IMG8 from '../../assets/images/ourAchievers/kunal keshri.jpg.png'
import { IHighlightedAchieverProps } from '../../types';
import { IOtherStudentCardProps } from '../../types';

export const HighlightedAchieversData: IHighlightedAchieverProps[] = [
    {
        rank: 'AIR-MAINS',
        color: '#1A4B02',
        id: 1,
        name: 'Ratan kumar',
        image:  MAINIMG1,
        altImage:  MAINIMGPHONE1,
        description: `In the constellation of brilliant minds that Ayaan's 
        Motion Academy takes pride in, Aushutosh Singh shines as one of the brightest stars. 
        With an astounding All India Rank of 03 in the IIT/JEE entrance exam, 
        Aushutosh has set a benchmark for excellence, dedication, and perseverance. 
        His journey from a curious learner to a national top ranker is a source of inspiration 
        for every aspirant dreaming of conquering the competitive exam skies.`,
        isReversed: false,
        bgColor: '#DEFFE0',
        bgColorWhite:'#fff',
    },
    {
        rank: 'AIR-MAINS',
        id: 2,
        name: 'Shreya Rai',
        image: MAINIMG2,
        altImage: MAINIMGPHONE2,
        description: `In the constellation of brilliant minds that Ayaan's Motion Academy takes pride in, Riya Gupta emerges as a stellar achiever, securing an impressive All India Rank of 05 in the IIT/JEE entrance exam. Riya's journey symbolizes resilience, brilliance, and the power of unwavering dedication. Her remarkable achievements inspire aspiring minds to reach for the stars.`,
        isReversed: true,
        color: '#4B0202',
        bgColor: '#FFE8DE',
        bgColorWhite:'#fff',
    },
];

export const OtherAchieversData: IOtherStudentCardProps[] = [
    {
        rank: "2022 BATCH",
        name: 'Akash Pramanik',
        image: IMG1,
        college: 'BIT MESRA RANCHI',
        stream: 'JEE',
    },
    {
        rank: "2022 BATCH",
        name: 'Nishant kumar',
        image: IMG3,
        college: 'BIT MESRA RANCHI',
        stream: 'JEE',
    },
    {
        rank: "2022 BATCH",
        name: 'Pranav Singh',
        image: IMG4,
        college: 'BIT MESRA RANCHI',
        stream: 'JEE',
    },
    {
        rank: "2022 BATCH",
        name: 'Tanishqua Jaiswal',
        image: IMG5,
        college: 'BIT MESRA RANCHI',
        stream: 'JEE',
    },
    {
        rank: "2022 BATCH",
        name: 'Shubham Kumar',
        image: IMG6,
        college: 'BIT MESRA RANCHI',
        stream: 'JEE',
    },
    {
        rank: "2022 BATCH",
        name: 'sumit kumar',
        image: IMG7,
        college: 'BIT SINDRI DHANWAD',
        stream: 'JEE',
    },
    {
        rank: "2022 BATCH",
        name: 'kunal keshri',
        image: IMG8,
        college: 'NIT JAMSHEDPUR',
        stream: 'JEE',
    },
    {
        rank: "2022 BATCH",
        name: 'Harshit Norbert Joe  ',
        image: IMG2,
        college: 'BIT SINDRI DHANWAD',
        stream: 'JEE',
    },
];



