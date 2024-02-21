import React from 'react'
import classes from './foundationbatch.module.scss'
import { BatchesFacultyComponent, BatchesFeatureCardComponent, BatchesIntroductionComponent } from '../../../components'




export const FoundationBatchContainer:React.FC = () => {
  return (
    <div className={classes.mainContainer}>
      <BatchesIntroductionComponent heading={''} subHeading={''} image={''} pageText={''}/>
      <BatchesFeatureCardComponent heading={''} details={''}/>
      <BatchesFacultyComponent image={''} facultyName={''} facultySubject={''} informationText={''}/>
    </div>
  )
}
