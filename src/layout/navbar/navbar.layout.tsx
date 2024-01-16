import React from "react"
import { MainLogo } from "../../assets/icons"
import { Link } from "react-router-dom"
import { Button } from "../../components"
import classes from './navbar.module.scss';


export const Navbar: React.FC = () => {
    return (
        <div className={classes.mainContainer}>
            <MainLogo className={classes.logo}/>
            <div className={classes.linkContainer}>
                <Link className={classes.link} to='/'>Achievers</Link>
                <Link className={classes.link} to='/'>Our Faculty</Link>
                <Link className={classes.link} to='/'>About Us</Link>
                <Link className={classes.link} to='/'>Contact Us</Link>
                <Link className={classes.link} to='/'>Fee Structure</Link>
                <Button label="Book a Demo" size="md"/>
            </div>
        </div>

    )
}