import React from 'react'
import classes from './aboutUs.module.scss'
import image from '../../assets/images/aboutUs/Rectangle 56 (1).png'
import image2 from '../../assets/images/aboutUs/Group 50.png';
import { Button, PageEndingText, PolicyText } from '../../components'
import { useWindowSize } from 'usehooks-ts';
import { ArrowIcon } from '../../assets';


interface ITermsAndPolicyProps {
    text: string;
}

const Subheader: ITermsAndPolicyProps[] = [
    {
        text: "As you stand at the crossroads of your academic journey, Ayaan's Motion Academy invites you to take the path leading to success, fulfillment, and self-discovery. With our proven track record, innovative learning solutions, and a supportive community, we are more than just an academy - we are a family. Together, let's unlock your potential, achieve your dreams, and set new benchmarks of success. Explore our programs, meet our faculty, and hear from our achievers. Discover how Ayaan's Motion Academy can be the catalyst for your academic and personal achievements. Your future begins here, and we are excited to be a part of your journey."
    }
];

export const AboutUsContainer: React.FC = () => {
    const { width } = useWindowSize();
    const isSmallScreen = width <= 768;
    return (
        <div className={classes.mainContainer}>
            <div className={classes.introductionContainer}>
                <div className={classes.headingContainer}>
                    <div className={classes.mainHeading}>Introducing Ayaan's Motion Academy</div>
                    <div className={classes.subHeading}>Dive Deeper into Our World - Where Every Scroll Unveils a New Chapter of Possibility and Success</div>
                </div>
                <img className={classes.Introductionimage} src={image} alt="image" />
            </div>
            <PageEndingText mainHeader={"In the heart of Ranchi, at the bustling Hariom Tower, lies a cradle of academic excellence and innovation - Ayaan's Motion Academy. Founded with the vision to empower and inspire, our academy has become a beacon of hope and success for aspirants of IIT/JEE, NEET, NDA, NTSE, and board examinations. At Ayaan's Motion Academy, we believe in unlocking the potential within each student, guiding them on a journey of discovery, learning, and unparalleled achievements."} />
            <div className={classes.facultyContainer}>
                <div className={classes.facultyHeadingContainer}>
                    <div className={classes.facultyHeading}>Expert Faculty: The Pillars of Our Success</div>
                    {isSmallScreen && <img src={image2} alt="group-picture" className={classes.facultyImage} />}
                    <div className={classes.facultySubHeading}>Our distinguished faculty, led by the renowned Ayaan sir, a mathematics virtuoso, forms the backbone of our academy. Comprising subject matter experts, seasoned educators, and industry veterans, our faculty brings a wealth of knowledge, experience, and passion to the classroom. Through innovative teaching methods, interactive sessions, and a mentorship-driven approach, they are committed to guiding students towards academic excellence and personal growth.</div>
                </div>
                {!isSmallScreen && <img src={image2} alt="group-picture" className={classes.facultyImage} />}
            </div>
            <div className={classes.inspireContainer}>
                <div className={classes.inspireInnerContainer}>
                    <div className={classes.inspireHeading}>Our Philosophy: Education Tailored to Aspirant's Dreams</div>
                    <div className={classes.inspireDetails}>Education is not one-size-fits-all. At Ayaan's Motion Academy, we understand that each student is unique, with distinct learning styles, aspirations, and challenges. Our educational philosophy centers around personalized learning, where education is tailored to cater to individual needs, fostering an environment where every student can thrive. With a blend of traditional values and modern teaching methodologies, we prepare our students not just for exams, but for life.</div>
                </div>
                <div className={classes.inspireInnerContainer}>
                    <div className={classes.inspireHeading}>Overcoming Contemporary Challenges: A Modern Approach to Learning</div>
                    <div className={classes.inspireDetails}>In today's fast-paced world, students face myriad challenges - from information overload and digital distractions to the pressures of competitive exams. Ayaan's Motion Academy addresses these challenges head-on, integrating technology with education to provide a balanced and engaging learning experience. Our digital learning platforms, interactive tools, and online resources complement our traditional teaching methods, ensuring students remain focused, motivated, and on track towards their goals.</div>
                </div>
                <div className={classes.inspireInnerContainer}>
                    <div className={classes.inspireHeading}>Proven Success: Our Legacy and Your Future</div>
                    <div className={classes.inspireDetails}>The success of our students is the true testament to our commitment and dedication. With countless top ranks in competitive exams like IIT/JEE and NEET, and exceptional board exam results, our achievers' circle continues to grow each year. These accomplishments underscore the effectiveness of our teaching methodologies, personalized learning plans, and the relentless spirit of our students and faculty alike.</div>
                </div>
                <div className={classes.inspireInnerContainer}>
                    <div className={classes.inspireHeading}>Beyond Academics: Nurturing Well-Rounded Individuals</div>
                    <div className={classes.inspireDetails}>At Ayaan's Motion Academy, we believe in holistic development. Our curriculum extends beyond textbooks, incorporating life skills, stress management workshops, and career guidance sessions. We prepare our students for the challenges of tomorrow, equipping them with the knowledge, skills, and confidence to excel in all walks of life.</div>
                </div>
            </div>
            <PolicyText
                mainHeader={"Join Us: Embark on Your Journey to Success"} details={Subheader} />
            <a href="/contact-Us" style={{ marginTop: '-5%' }}>
                <Button variant='outline' label='View Our Batches ' icon={<ArrowIcon />} />
            </a>
        </div>
    )
}
