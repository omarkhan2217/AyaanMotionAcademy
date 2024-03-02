import IMG from '../../../assets/images/ourBatch/target_FILL0_wght400_GRAD0_opsz24 1.png'
import TEACHERIMG1 from '../../../assets/images/ourFaculty/Ellipse 10.png'
import TEACHERIMG2 from '../../../assets/images/ourFaculty/Ellipse 10 (1).png'
import TEACHERIMG3 from '../../../assets/images/ourFaculty/Ellipse 10 (4).png'
import TEACHERIMG4 from '../../../assets/images/ourFaculty/Ellipse 10 (2).png'

export const targetBatchData = {
    targetBatch: {
        introduction: {
            heading: 'Target Batch',
            subHeading: 'Dropper',
            image: IMG,
            pageText: 'The TARGET Batch is an intensive program designed for students who are taking a year off to focus solely on cracking JEE/NEET. With a crash course format, segmented learning paths, and enhanced support, this batch is your fast track to achieving your dreams.',
            bgColor: '#FFF4E9',
            headingColor: '#441C05',
        },
        featureCard: [
            {
                heading: 'Intensive Crash Course:',
                details: "Immerse yourself in a focused and comprehensive crash course that covers the JEE/NEET syllabus in a condensed timeframe, maximizing your learning.",
                bgColor: "#FFEBE8",
                color: '#441005',
            },
            {
                heading: 'Segmented Learning Paths (T1, T2, T3):',
                details: "Choose a learning path that matches your current level of preparation, allowing for a customized approach that targets your specific needs.",
                bgColor: "#FFF6E8",
                color: '#441705',
            },
            {
                heading: 'Rapid Revision Series:',
                details: "Quickly revise key topics and concepts with our rapid revision series, designed to refresh your memory and sharpen your skills.",
                bgColor: "#D5F1D7",
                color: '#054422',
            },
            {
                heading: "Enhanced Doubt Clearing:",
                details: "Take advantage of increased doubt-clearing sessions, ensuring you overcome any obstacles in your understanding swiftly.",bgColor: "#D7E6FC",
                color: '#052544',
            },
            {
                heading: "Bi-Weekly Assessments:",
                details: "Track your progress with regular assessments that provide insights into your strengths and areas for improvement.",
                bgColor: "#E9E8FF",
                color: '#0D0544',
            },
            {
                heading: "Interactive Study Groups:",
                details:"Join online study groups for collaborative learning, sharing insights, and solving problems together, fostering a supportive community of aspirants.",
                color: '#370544',
                bgColor: "#F5E8FF",
            },
            
        ],
        faculty: [
            {
                image: TEACHERIMG1,
                facultyName: 'Ayaan Sir',
                facultySubject: 'Faculty for Maths',
            },
            {
                image: TEACHERIMG2,
                facultyName: 'Raghav Sir',
                facultySubject: 'Faculty for Physics',
            },
            {
                image: TEACHERIMG3 ,
                facultyName: 'Anmol Sir',
                facultySubject: 'Faculty for Biology',
            },
            {
                image: TEACHERIMG4 ,
                facultyName: 'Amit Sir',
                facultySubject: 'Faculty for Chemistry',
            },
        ]
    },
};

