import React from 'react'
import classes from './ourbatches.module.scss'
import { ISBatchesCardProps } from '../../types'
import { Button } from '..'
import { ArrowIcon,CheckMark } from '../../assets'
export const OurBatcehscomponent: React.FC<ISBatchesCardProps> = (props: ISBatchesCardProps) => {
  const { BatchName, grade, detaile1, detaile2, detaile3, detaile4, detaile5, detaile6, guide, image, } = props
  return (

    <div className={classes.mainContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.InfoContainer}>
          <div className={classes.BatchName}>{BatchName}</div>
          <div className={classes.grade}>{grade} </div>
          <div className={classes.imageContaienr}><img src={image}></img>
            <div className={classes.guide}>{guide}</div></div>
        </div>
        <div className={classes.buttonContainer} >
          <Button label="Register  Now" size="md" />
        </div>
      </div>
      <div className={classes.detailsContainers}>
        <div><CheckMark className={classes.icon} /> {detaile1} </div>
        <div> <CheckMark className={classes.icon} />{detaile2}</div>
        <div> <CheckMark className={classes.icon} />{detaile3}</div>
        <div> <CheckMark className={classes.icon} />{detaile4}</div>
        <div> <CheckMark className={classes.icon} />{detaile5}</div>
        <div> <CheckMark className={classes.icon} />{detaile6}</div>

      </div>
      <div className={classes.button2}>
        <Button label='Know More' variant='outline' icon={<ArrowIcon />} />
      </div>

    </div>


  )
}
