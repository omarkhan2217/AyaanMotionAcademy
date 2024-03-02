import IMG from '../../../assets/images/ourBatch/Vector.png'
import TEACHERIMG from '../../../assets/images/ourFaculty/Ellipse 10.png'
import TEACHERIMG2 from '../../../assets/images/ourFaculty/Ellipse 10 (1).png'
import TEACHERIMG3 from '../../../assets/images/ourFaculty/Ellipse 10 (4).png'
import TEACHERIMG4 from '../../../assets/images/ourFaculty/Ellipse 10 (3).png'

export const foundationBatchData = {
    foundationBatch: {
        introduction: {
            heading: 'Foundation Batch',
            subHeading: '11th Grade',
            image: IMG,
            pageText: 'Embark on your academic journey with a solid foundation. Our Foundation Batch is meticulously designed for 11th-grade students aiming to build a robust base in core subjects, ensuring a seamless transition into competitive exam preparation and board exams.',
            bgColor:'#EDE9FF',
            headingColor:'#300544',
        },
        featureCard: [
            {
                heading: 'Solid Foundation:',
                bgColor:"#FFEBE8",
                color:'#441005',
                details: "Strengthen your understanding of fundamental concepts across subjects, setting a strong academic base for future success."
            },
            {
                heading: 'Focused Board Prep:',
                bgColor:"#FFF6E8",
                color:'#441705',
                details: "Dive deep into NCERT and Exemplar problems, ensuring comprehensive coverage and mastery of the board syllabus."
            },
            {
                heading: 'Interactive Doubt Sessions:',
                bgColor:"#D5F1D7",
                color:'#054422',
                details: "Engage in weekly interactive sessions where you can clarify doubts, ensuring no query goes unanswered."
            },
            {
                heading: "Personalized Study Plans:",
                bgColor:"#D7E6FC",
                color:'#052544',
                details: "Receive a study plan tailored to your learning pace and style, maximizing your academic potential."
            },
            {
                heading: "Regular Assessments:",
                bgColor:"#E9E8FF",
                color:'#0D0544',
                details: "Benefit from continuous evaluation through regular tests that track your progress and identify areas for improvement."
            },
            {
                heading: "Topic-wise DPPs:",
                color:'#370544',
                bgColor:"#F5E8FF",
                details:"Enhance your practice with Daily Practice Papers that reinforce learning and aid in retention."
            },
            
        ],
        faculty: [
            {
                image: TEACHERIMG,
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
                facultyName: 'Ram Sir',
                facultySubject: 'Faculty for Chemistry',
            },
        ]
    },
};

