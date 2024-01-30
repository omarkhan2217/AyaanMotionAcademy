import React from "react"
import classes from "./footer.module.scss"
import { Link } from 'react-router-dom';
import { NavigationData } from '../../constants/footerData'
import { MainLogo } from "../../assets/icons"

export const Footer: React.FC = () => {
  return (

    <div className={classes.maincontiner}>
      <div className={classes.upper_element_container}>
        <div className={classes.footer_heading}>
          <MainLogo className={classes.logo} />
          <div className={classes.logo_text}>Join Ayaan's Motion Academy – where dreams transform into reality! </div>
        </div>
        <div className={classes.elements}>
          {NavigationData.map((group, groupIndex) => (
            <div key={groupIndex} className={classes[group.className]} style={{textAlign:'start'}}>
              {group.elements.map((item, index) => (
                <Link key={index} className={classes.link} to={item.link}>
                  {item.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.lower_element_container}>
        <div className={classes.policyCon}>
          <div>Terms of Service / Privacy Policy </div>
          <div>© 2024 Ayaan's Motion Academy. All Rights Reserved.</div>
        </div>
        <div className={classes.Dev_Con}>
          Design & Devloped by <span className={classes.span}>HUMO</span>
        </div>
        <div className={classes.social_container}>
          <div>Follow Us</div>
          <div className={classes.social_media}>


          </div>
        </div>

      </div>

    </div>


  )
}
