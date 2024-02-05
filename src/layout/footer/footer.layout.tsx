import React from "react"
import classes from "./footer.module.scss"
import { Link } from 'react-router-dom';
import { FooterLinksData, NavigationData } from '../../constants/footerData'
import { MainLogo } from "../../assets/icons"

export const Footer: React.FC = () => {
  return (
    <div className={classes.mainContiner}>
      <div className={classes.upperElementContainer}>
        <div className={classes.footerHeading}>
          <MainLogo className={classes.logo} />
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
        <div className={classes.plicyContainer}>
          {FooterLinksData.map((group, groupIndex) => (
            <div key={groupIndex} className={classes[group.className]} style={{ textAlign: 'start' }}>
              {group.plicyContainer.map((item, index) => (
                <Link key={index} className={classes.link} to={item.link}>
                  {item.text}
                </Link>
              ))}
            </div>
          ))}
          <div>© 2024 Ayaan's Motion Academy. All Rights Reserved.</div>
        </div>
        <div className={classes.plicyContainer}>
          Design & Devloped by <span>HUMO</span>
        </div>
        <div className={classes.socialContainer}>
          <div>Follow Us</div>
          <div className={classes.socialMedia}>
          </div>
        </div>

      </div>

    </div>


  )
}
