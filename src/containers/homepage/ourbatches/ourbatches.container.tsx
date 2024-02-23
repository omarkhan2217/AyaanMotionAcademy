import React from 'react'
import classes from './ourbatches.module.scss'
import { PageText } from '../../../components'
import { OurBatcehscomponent } from '../../../components'
import { OurBatchesData } from './ourBatches.data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'; 
import { useWindowSize } from 'usehooks-ts'

export const Ourbatchescontainer: React.FC = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate(); 

  const SlidePreView =
    width <= 400 ? 1.2 :
      width <= 550 ? 1.4 :
        width <= 600 ? 1.6 :
          width <= 650 ? 1.4 :
            width <= 768 ? 1.7 :
              width <= 900 ? 2.1 :
                width <= 1024 ? 2.3 :
                  width > 1024 ? 4 :
                    4

  const scholarBatch = OurBatchesData.find(batch => batch.isScholar) || { BatchName: '', grade: '', guide: '', image: '', isScholar: false, path: ''};
  const otherBatches = OurBatchesData.filter(batch => !batch.isScholar);

  const batchesToDisplay = width <= 1024 ? [scholarBatch, ...otherBatches] : OurBatchesData;
  return (
    <div className={classes.mainContainer}>
      <div className={classes.textContainer}>
        <PageText
          mainHeader="Explore Our Diverse Academic Programs"
          subHeader="Find Your Path: Customized Learning for Every Aspiring Mind"
          hasButton buttonText="View All" onClick={()=> navigate('/our-batches')}
        />
      </div>
      <div className={classes.batchesCardContainer}>
        {width <= 1024 ?
          <Swiper
            spaceBetween={0}
            slidesPerView={SlidePreView}
            freeMode={true}
            className={classes.carousel}>
            {batchesToDisplay.map((batch, index) => (
              <SwiperSlide key={index}>
                <div className={classes.ourBatchesCardContainer}>
                  <motion.div>
                    <OurBatcehscomponent
                      BatchName={batch.BatchName}
                      grade={batch.grade}
                      guide={batch.guide}
                      image={batch.image}
                      isScholar={batch.isScholar}
                      onClick={() => navigate(`/our-batches${batch.path}`)}
                    />
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          :
          batchesToDisplay.map((batch, index) => (
            <div key={index} className={classes.ourBatchesCardContainer}>
              <OurBatcehscomponent
                BatchName={batch.BatchName}
                grade={batch.grade}
                guide={batch.guide}
                isScholar={batch.isScholar}
                image={batch.image}
                onClick={() => navigate(`/our-batches${batch.path}`)}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};
