import React from 'react'
import classes from './ourbatches.module.scss'
import { PageText } from '../../../components'
import { OurBatcehscomponent } from '../../../components'
import { OurBatchesData } from './ourBatches.data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { useWindowSize } from 'usehooks-ts'

export const Ourbatchescontainer: React.FC = () => {
  const { width } = useWindowSize();
  const SlidePreView =
    width <= 550 ? 1.4 :
      width <= 600 ? 1.6 :
        width <= 650 ? 1.4 :
          width <= 768 ? 1.7 :
            width <= 900 ? 2.1 :
              width <= 1024 ? 2.3 :
                width > 1024 ? 4 :
                  4
  return (
    <div className={classes.mainContainer}>
      <div className={classes.textContainer}>
        <PageText
          mainHeader="Explore Our Diverse Academic Programs"
          subHeader="Find Your Path: Customized Learning for Every Aspiring Mind"
          hasButton buttonText="View All"
        />
      </div>
      <div className={classes.batchesCardContainer}>
        {width <= 1024 ?
          <Swiper
            spaceBetween={0}
            slidesPerView={SlidePreView}
            freeMode={true}
            className={classes.carousel} >
            {OurBatchesData.map((item) => (
              <SwiperSlide key={Math.random()}>
                <div className={classes.ourBatchesCardContainer}>
                  <motion.div>
                    <OurBatcehscomponent BatchName={item.BatchName} grade={item.grade} detaile1={item.detaile1} detaile2={item.detaile2} detaile3={item.detaile3} detaile4={item.detaile4} detaile5={item.detaile5} detaile6={item.detaile6} guide={item.guide} image={item.image} />

                  </motion.div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
          :
          OurBatchesData.map((item) => (
            <div key={Math.random()} className={classes.ourBatchesCardContainer}>
              <OurBatcehscomponent BatchName={item.BatchName} grade={item.grade} detaile1={item.detaile1} detaile2={item.detaile2} detaile3={item.detaile3} detaile4={item.detaile4} detaile5={item.detaile5} detaile6={item.detaile6} guide={item.guide} image={item.image} />
            </div>
          ))
        }
      </div>
    </div>

  );
};
