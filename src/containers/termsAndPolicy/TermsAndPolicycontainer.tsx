import React from 'react'
import classes from './termsAndPolicy.module.scss'
import {  PolicyText } from '../../components'


export interface ITermsAndPolicyProps {
  text: string;
}
const termsAndPolicyDetails: ITermsAndPolicyProps[]=[
  {
    text :`Welcome to Ayaan's Motion Academy! By accessing our website, enrolling in our courses, or engaging with our services, you agree to comply with and be bound by the following terms and conditions
    `,
  },
  {
    text :`Our website and course materials are protected by copyright and other intellectual property laws. You may not modify, reproduce, distribute, transmit, display, or create derivative works from any content obtained through our website without prior written consent.`,
  },
  {
    text :`Some features of our website may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
    `,
  },
  {
    text :`When you enroll in our courses, you agree to provide accurate and complete information about yourself. Course fees are payable in advance and are non-refundable, except as required by law.`,
  },
  {
    text :`We reserve the right to change course fees or cancel courses at any time without prior notice. You agree to conduct yourself in a respectful and professional manner when interacting with our instructors, staff, and fellow students.`,
  },
  {
    text :`We make no representations or warranties of any kind regarding the accuracy, reliability, or completeness of the information provided on our website or through our services.`,
  },
  {
    text :`In no event shall Ayaan's Motion Academy or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website or services.`,
  },
  {
    text :`These terms and conditions shall be governed by and construed in accordance with the laws of [your jurisdiction], without regard to its conflict of law provisions.`,
  },
  {
    text: `Thank you for choosing Ayaan's Motion Academy! If you have any questions or concerns about these terms and conditions, please contact us at ayaansmotionacademy@gmail.com.`
  },
]

export const TermsAndPolicycontainer:React.FC = () => {
  return (
    <div className={classes.mainContainer}>
      <PolicyText 
      mainHeader={"Terms and Conditions"} 
      details={termsAndPolicyDetails}/>
    </div>
  )
}
