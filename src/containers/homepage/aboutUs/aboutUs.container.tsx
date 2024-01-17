import React from 'react'
import classes from './aboutUs.module.scss'

export const  AboutUscontainer : React.FC=()=> {
  return (
    <div className={classes.container}>
        <div className={classes.innerdis}>
        Founded with a <span className={classes.boldDis} >vision</span>  to transform dreams into <span className={classes.boldDis}>achievements</span>, Ayaan's Motion Academy is your partner in academic <span className={classes.boldDis}>excellence</span>. Learn more about our journey and commitment to education.
        </div>
    </div>
  );
}
