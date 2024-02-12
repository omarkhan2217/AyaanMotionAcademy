import React from 'react';
import classes from './privacyPolicy.module.scss';
import { PolicyText } from '../../components';

export interface IPrivacyPolicyProps {
  text: string;
}

const PrivacyPolicyDetails: IPrivacyPolicyProps[] = [
  {
    text: `At Ayaan's Motion Academy, we are committed to protecting the privacy and security of our users. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, enroll in our courses, or interact with our services.`
  },
 
  {
    text: ` When you use our website, we may collect certain information about you, such as your name, email address, phone number, and demographic details. We use this information to provide and improve our services, communicate with you, and personalize your experience.`
  },
 
  {
    text: `  We may also collect usage data, such as your IP address, browser type, and pages visited, to analyze trends and administer the website. Our website uses cookies and similar technologies to enhance your browsing experience and track your interactions with our site.
    `
  },
 
  {
    text: `   We take the security of your personal information seriously and implement appropriate measures to protect it from unauthorized access, disclosure, or alteration. However, please be aware that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`
  },
 
  {
    text: `Our website may contain links to third-party websites or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.`
  },
  {
    text:`By using our website or engaging with our services, you consent to the terms outlined in this Privacy Policy. We may update this policy from time to time, so we encourage you to review it periodically for any changes.`
  },
 
  {
    text:` If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [contact email].`
  },
 

]

export const PrivacyPolicyContainer: React.FC = () => {
  return (
    <div className={classes.mainContainer}>
      <PolicyText
       mainHeader={`Privacy Policy`}
        details={PrivacyPolicyDetails}/>

    </div>
  );
};
