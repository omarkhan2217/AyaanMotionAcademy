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
        rank: 'AIR-498 JEE-ADVANCE-2022',
        color: '#1A4B02',
        id: 1,
        name: 'Ratan kumar',
        image:  MAINIMG1,
        altImage:  MAINIMGPHONE1,
        description: `In the galaxy of exceptional talents nurtured at Ayaan's Motion Academy, Rataan Kumar emerges as a luminous beacon. Achieving an impressive All India Rank of 498 in both the JEE-Mains and Advance 2022, Rataan has established a new standard for academic excellence, unwavering commitment, and resilience.`,
        isReversed: false,
        bgColor: '#DEFFE0',
        bgColorWhite:'#fff',
    },
    {
        rank: 'JEE-ADVANCE-2018',
        id: 2,
        name: 'Shreya Rai',
        image: MAINIMG2,
        altImage: MAINIMGPHONE2,
        description: `In the constellation of prodigies at Ayaan's Motion Academy, Shreya Rai sparkles with distinction. Securing an admirable Rank in the JEE-Mains 2016, Shreya has redefined benchmarks of academic dedication and excellence. Her evolution from a curious learner to a celebrated achiever stands as a beacon of inspiration for all students determined to navigate the challenges of competitive examinations successfully.`,
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
        name: 'Sumit kumar',
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



