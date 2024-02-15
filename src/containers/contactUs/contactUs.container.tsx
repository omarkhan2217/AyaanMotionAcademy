import React from 'react';
import classes from './contactUs.module.scss'
import { PolicyText } from '../../components';
import img from '../../assets/images/contactUs/Rectangle 63.png'
import { Button } from '../../components';
import { ArrowIcon } from '../../assets';
import { useWindowSize } from 'usehooks-ts';

interface ITermsAndPolicyProps {
    text: string;
}

const contactUsdetails: ITermsAndPolicyProps[] = [
    {
        text: "At Ayaan's Motion Academy, we're always here to listen and help guide you towards your academic dreams. Whether you have questions about our programs, need guidance on your educational journey, or simply want to learn more about what makes our academy unique, our doors (and inboxes) are always open. Reach out today, and let's start a conversation that could transform your future."
    }
];

export const ContactUscontainer: React.FC = () => {
    const googleMap = "https://www.google.com/maps/place/Ayaan+Motion+Academy/@23.3753303,85.3333714,15z/data=!4m6!3m5!1s0x39f4e14349a3aea3:0xdba7bfb1df9d1c72!8m2!3d23.3753303!4d85.3333714!16s%2Fg%2F11trtb12qz?entry=ttu";
    const { width } = useWindowSize();
    const isSmallScreen = width <= 768;

    return (
        <div className={classes.mainContainer}>
            <PolicyText mainHeader={"Get in Touch With Us"} details={contactUsdetails} />
            <div className={classes.innerContainer}>
                <div className={classes.detailsContainer}>
                    <div className={classes.details}>
                        <div className={classes.heading}>Phone Number:</div>
                        <a className={classes.link} href="tel:+918102549326">+918102549326</a>
                    </div>
                    <div className={classes.details}>
                        <div className={classes.heading}>Email:</div>
                        <a className={classes.link} href="mailto:ayaansmotionacademy@gmail.com">ayaansmotionacademy@gmail.com</a>
                    </div>
                    <div className={classes.details}>
                        <div className={classes.heading}>Our Address:</div>
                        <div className={classes.link}>Hariom Tower, 5th Floor, Room No. 504, 507, and 509, Ranchi, Jharkhand</div>
                        <a className={classes.link} href={googleMap} target="_blank" rel="noopener noreferrer"><Button label="Open In Google Maps" variant='outline' icon={<ArrowIcon />} style={{translate:'-28.6%'}} /></a>
                    </div>
                    {isSmallScreen && <img className={classes.imageContainer} src={img} alt="Hari-Om Tower" />}
                    <div className={classes.details}>
                        <div className={classes.heading}>Follow Us:</div>
                    </div>
                </div>
                {!isSmallScreen && <img className={classes.imageContainer} src={img} alt="Hari-Om Tower" />}
            </div>
        </div>
    )
}
