import React from 'react'
import classes from './ourbatches.module.scss'
import { ISBatchesCardProps } from '../../types'
import { Button} from '..'

export const OurBatcehscomponent: React.FC<ISBatchesCardProps> = (props: ISBatchesCardProps) => {
  const { BatchName, grade, detaile1, detaile2, detaile3, detaile4, detaile5, detaile6, guide, image } = props
  return (

    <div className={classes.mainContainer}>
      <div className={classes.inner_container}>
      <div className={classes.InfoContainer}>
        <div className={classes.Batchname}>{BatchName}</div>
        <div className={classes.grade}>{grade} </div>
        <div className={classes.image_contaienr}>{image}
        <div className={classes.guide}>{guide}</div></div>
      </div>
      <div className={classes.buttonContainer}>
        <Button label="Register  Now" size="md" />
      </div>
      </div>
      <div className={classes.details_containers}>
        <ul>
          <li>{detaile1}</li>
          <li>{detaile2}</li>
          <li>{detaile3}</li>
          <li>{detaile4}</li>
          <li>{detaile5}</li>
          <li>{detaile6}</li>
      <div className={classes.underline}>_____________________________</div>
        </ul>

      </div>
      <div className={classes.button_2}>
        {/* <PageText
          hasButton buttonText='know more' mainHeader=''></PageText> */}
          <Button label='know more'/>
      </div>

    </div>


  )
}
