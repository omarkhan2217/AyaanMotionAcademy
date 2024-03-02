import IMG from '../../../assets/images/ourBatch/school_FILL0_wght400_GRAD0_opsz24 1.png'
import TEACHERIMG1 from '../../../assets/images/ourFaculty/Ellipse 10.png'
import TEACHERIMG2 from '../../../assets/images/ourFaculty/Ellipse 10 (1).png'
import TEACHERIMG3 from '../../../assets/images/ourFaculty/Ellipse 10 (4).png'
import TEACHERIMG4 from '../../../assets/images/ourFaculty/Ellipse 10 (2).png'

export const scholarBatchData = {
    scholarBatch: {
        introduction: {
            heading: 'Scholar Batch',
            subHeading: '12th Grade',
            image: IMG,
            pageText: "The SCHOLAR Batch is our premier program for 12th-grade students dedicated to excelling in competitive exams like JEE/NEET. With specialized modules, expert faculty, and rigorous testing, this batch is your gateway to top ranks.",
            bgColor: '#E2F5ED',
            headingColor: '#05441E',
        },
        featureCard: [
            {
                heading: 'Expert Faculty',
                details: "Benefit from the expertise of distinguished subject matter experts who bring specialized knowledge and insights to your preparation.",
                bgColor: "#FFEBE8",
                color: '#441005',
            },
            {
                heading: 'Specialized Competitive Modules:',
                details: "Tackle competitive exams with confidence through our advanced curriculum designed specifically for JEE/NEET aspirants.",
                bgColor: "#FFF6E8",
                color: '#441705',
            },
            {
                heading: 'High-Frequency Testing:',
                details: "Stay on top of your preparation with our rigorous and frequent testing pattern, designed to simulate the intensity of competitive exams.",
                bgColor: "#D5F1D7",
                color: '#054422',
            },
            {
                heading: "Expert Guest Lectures:",
                details: "Gain additional insights and motivation from sessions conducted by successful IITians/Doctors, enriching your learning experience.",bgColor: "#D7E6FC",
                color: '#052544',
            },
            {
                heading: "Personalized Academic Planning:",
                details: "Receive individualized study plans and progress tracking, ensuring a focused approach to your exam preparation.",
                bgColor: "#E9E8FF",
                color: '#0D0544',
            },
            {
                heading: "Exclusive Workshops:",
                details:"Enhance your test-taking strategies and time management skills with our in-depth workshops, giving you a competitive edge.",
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

