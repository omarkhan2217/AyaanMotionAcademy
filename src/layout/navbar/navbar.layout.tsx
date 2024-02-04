import React from "react"
import { MainLogo } from "../../assets/icons"
import classes from './navbar.module.scss';
import { useWindowSize } from "usehooks-ts";
import { DesktopNav, MenuNav } from ".";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    const { width } = useWindowSize();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [windowWidth, setWindowWidth] = React.useState<any>();
    React.useEffect(() => {
        setWindowWidth(width)
    }, [width])
    return (
        <div className={classes.mainContainer}>
            <Link to={'/'}>
                <MainLogo className={classes.logo} />
            </Link>
            {windowWidth <= 1024 ?
                <MenuNav />
                :
                <DesktopNav />
            }
        </div>

    )
}