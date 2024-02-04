import React from 'react'
import classes from './ourbatches.module.scss'
import { ISBatchesCardProps } from '../../types'
import { Button} from '..'
import { ArrowIcon } from '../../assets'

export const OurBatcehscomponent: React.FC<ISBatchesCardProps> = (props: ISBatchesCardProps) => {
  const { BatchName, grade, detaile1, detaile2, detaile3, detaile4, detaile5, detaile6, guide, image } = props
  return (

    <div className={classes.mainContainer}>
      <div className={classes.inner_container}>
      <div className={classes.InfoContainer}>
        <div className={classes.Batchname}>{BatchName}</div>
        <div className={classes.grade}>{grade} </div>
        <div className={classes.image_contaienr}><img src={image}></img>
        <div className={classes.guide}>{guide}</div></div>
      </div>
      <div className={classes.buttonContainer}>
        <Button label="Register  Now" size="md" />
      </div>
      </div>
      <div className={classes.details_containers}>
          <div>{detaile1}</div>
          <div>{detaile2}</div>
          <div>{detaile3}</div>
          <div>{detaile4}</div>
          <div>{detaile5}</div>
          <div>{detaile6}</div>

      </div>
      <div className={classes.button_2}>
        {/* <PageText
          hasButton buttonText='know more' mainHeader=''></PageText> */}
          <Button label='Know More'variant='outline' icon={<ArrowIcon/>}/>
      </div>

    </div>


  )
}
