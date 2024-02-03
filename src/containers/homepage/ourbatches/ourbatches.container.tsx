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
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <PageText
          mainHeader="Explore Our Diverse Academic Programs"
          subHeader="Find Your Path: Customized Learning for Every Aspiring Mind"
          hasButton buttonText="View All"
        />
      </div>
      <div className={classes.batchesCard_container}>
        <Swiper
          spaceBetween={200}
          slidesPerView={
            width <= 420 ? 1 :
              width <= 768 ? 2 :
                width <= 1024 ? 3 :
                  width <= 1440 ? 4 :
                    width > 1440 ? 4 :
                      OurBatcehscomponent.length
          }
          freeMode={true}
          className={classes.carousel} >
          {OurBatchesData.map((item) => (
            <SwiperSlide>
              <div key={Math.random()}>
                <motion.div>
                  <OurBatcehscomponent BatchName={item.BatchName} grade={item.grade} detaile1={item.detaile1} detaile2={item.detaile2} detaile3={item.detaile3} detaile4={item.detaile4} detaile5={item.detaile5} detaile6={item.detaile6} guide={item.guide} image={item.image} />

                </motion.div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  );
};
