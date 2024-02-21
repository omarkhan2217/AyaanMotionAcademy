import React from "react"
import classes from "./footer.module.scss"
import { Link } from 'react-router-dom';
import { FooterLinksData, NavigationData } from '../../constants/footerData'
import mainLogo from "../../assets/images/mainLogo/logo.png"
import { YoutubeIcon, TwitterIcon, LinkedInIcon, FacebokIcon, InstagramIcon } from "../../assets";

export const Footer: React.FC = () => {
  return (
    <div className={classes.mainContiner}>
      <div className={classes.upperElementContainer}>
        <div className={classes.footerHeading}>
          <img src={mainLogo} alt="mainLogo" className={classes.mainLogo} />
          <div className={classes.logoText}>Join Ayaan's Motion Academy – where dreams transform into reality! </div>
        </div>
        <div className={classes.elements}>
          {NavigationData.map((group, groupIndex) => (
            <div key={groupIndex} className={classes[group.className]} style={{ textAlign: 'start' }}>
              {group.elements.map((item, index) => (
                <Link key={index} className={classes.link} to={item.link}>
                  {item.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.lowerElementContainer}>
        <div className={classes.policyContainer}>
          {FooterLinksData.map((group, groupIndex) => (
            <div key={groupIndex} className={classes[group.className]} style={{ textAlign: 'start' }}>
              {group.policyContainer.map((item, index) => (
                <Link key={index} className={classes.link} to={item.link}>
                  {item.text}
                </Link>
              ))}
            </div>
          ))}
          <div>© 2024 Ayaan's Motion Academy. All Rights Reserved.</div>
        </div>
        <div className={classes.policyContainer}>
          Design & Devloped by <span className={classes.companyName}>HUMO</span>
        </div>
        <div className={classes.socialContainer}>
          <div>Follow Us</div>
          <div className={classes.socialMedia}>
            <a href="https://www.youtube.com/channel/UCml6M5g7DRPd6W1bcX7313g"><YoutubeIcon /></a>
            <a href="https://www.instagram.com/ayaansmotionacademy/"><InstagramIcon /></a>
            <a href="https://twitter.com/ayaansmotion"><TwitterIcon /></a>
            <a href="https://www.facebook.com/ayaansmotionacademy"><FacebokIcon /></a>
            <a href="/"><LinkedInIcon /></a>
          </div>
        </div>

      </div>

    </div>


  )
}
