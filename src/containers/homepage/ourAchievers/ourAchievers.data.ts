import IMG1 from '../../../assets/images/homepage/ourAchievers/Rajbeer-Singh.png'
import IMG2 from '../../../assets/images/homepage/ourAchievers/Priyanshu Kumar Mehta.png'
import IMG3 from '../../../assets/images/homepage/ourAchievers/Ricky Mukherjee.png'
import IMG4 from '../../../assets/images/homepage/ourAchievers/kumar-saurav.png'
import { IStudentCardProps } from '../../../types';

export const ourAchieversData: IStudentCardProps[] = [
    {
        rank: 'JEE-MAIN 2024',
        border: true,
        name: 'Rajbeer Singh',
        college: 'PERCENTILE-99.987%',
        image: IMG1,
        y: 150,
        stifness: 80,
        color: '#C0B1FF',
        pillColor: '#7465AF',
    },
    {
        rank: 'JEE-MAIN 2024',
        name: 'Priyanshu Kumar',
        college: 'PERCENTILE-98.344%',
        image: IMG2,
        color:'#8366FF',
        y: 250,
        stifness: 70,
        pillColor: '#4E466F',
    },
    {
        rank: 'JEE-MAIN 2024',
        name: 'Ricky Mukherjee',
        college: 'PERCENTILE-98.291%',
        image: IMG3,
        color:'#C8A376',
        y: 350,
        stifness: 60,
        pillColor: '#775C3B',
    },
    {
        rank: 'JEE-MAIN 2024',
        name: 'Kumar Saurav',
        college: 'PERCENTILE-93.303%',
        image: IMG4,
        color:'#488774',    
        y: 400,
        pillColor: '#2A5B4C',
        stifness: 50,
    },
];


