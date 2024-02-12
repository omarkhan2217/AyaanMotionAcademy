import React from 'react'
import classes from './otherStudentCard.module.scss'
import { IOtherStudentCardProps } from '../../types'

export const OtherStudentCard: React.FC<IOtherStudentCardProps> = (props: IOtherStudentCardProps) => {
  const { name, college, rank, image, stream, isFacultyCard } = props
  return (
    <div className={isFacultyCard ? classes.mainContainerFaculty : classes.mainContainer}>
      {isFacultyCard ? null : <div className={classes.rankContainer}> {rank}</div>}
      <div className={classes.stream}>{stream}</div>
      <div className={classes.imageContainer}>{image}</div>
      <div className={classes.studentName}>{name}</div>
      <div className={classes.college}>{college}</div>
    </div>
  )
}