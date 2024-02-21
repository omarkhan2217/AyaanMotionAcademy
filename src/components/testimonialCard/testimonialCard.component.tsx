import React from 'react'
import classes from './testimonialCard.module.scss'
import { ISTestimonialCardProps } from '../../types'

export const TestimonialCard: React.FC<ISTestimonialCardProps> = (props: ISTestimonialCardProps) => {
  const { name, image, comment } = props
  return (
    <div className={classes.mainContainer}>
      <div className={classes.textContainer}>{comment}</div>
      <div className={classes.profileContainer}>
        <img className={classes.imgContainer} src={image} alt="student-image" width={50} height={40}/>
        <div className={classes.nameContainer}>{name}</div>
      </div>

    </div>
  )
}
