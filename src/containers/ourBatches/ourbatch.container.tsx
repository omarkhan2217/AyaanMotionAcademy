import React, { useState, useEffect } from 'react';
import classes from './ourBatch.module.scss';
import { PageEndingText, PageText } from '../../components';
import { OurBatchesComponent } from '../../components';
import { batchesData } from '../../constants';
import { useNavigate } from 'react-router-dom';

export const OurbatchContainer: React.FC = () => {
  const navigate = useNavigate();
  const [orderedData, setOrderedData] = useState(batchesData);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        const scholarIndex = batchesData.findIndex(batch => batch.isScholar);
        if (scholarIndex !== -1 && scholarIndex !== 0) {
          const reorderedData = [
            batchesData[scholarIndex],
            ...batchesData.slice(0, scholarIndex),
            ...batchesData.slice(scholarIndex + 1),
          ];
          setOrderedData(reorderedData);
        }
      } else {
        setOrderedData(batchesData);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.pageText}>
        <PageText mainHeader="From Foundation to Lakshya - A Batch for Every Aspirant"
          subHeader="Each batch at Ayaan's Motion Academy is more than just a program; it's a gateway to realizing your dreams." />
      </div>
      <div className={classes.batchesCardContainer}>
        {orderedData.map((batch, index) => (
          <OurBatchesComponent
            BatchName={batch.BatchName}
            grade={batch.grade}
            guide={batch.guide}
            isScholar={batch.isScholar}
            key={index}
            onClick={() => navigate(`/our-batches${batch.path}`)}
          />
        ))}
      </div>
      <div className={classes.otherDetailContainer}>
        <div className={classes.otherMainheading}>With a curriculum meticulously crafted by expert educators and subject matter specialists, our batches offer:</div>
        <div className={classes.otherDetails}>
          <div className={classes.subDetails}><span className={classes.otherHeading}>Personalized Learning Experiences:</span> Understand and engage with subjects like never before, with customized study plans that adapt to your learning pace and style.</div>
          <div className={classes.subDetails}><span className={classes.otherHeading}>Expert Guidance:</span> Learn from the best in the field. Our faculty comprises renowned educators and exam veterans who bring invaluable insights and mentorship.</div>
          <div className={classes.subDetails}><span className={classes.otherHeading}>Success-Oriented Curriculum:</span> Whether it's acing your board exams or securing a top rank in competitive exams like IIT/JEE and NEET, our curriculum is aligned with your goals.</div>
          <div className={classes.subDetails}><span className={classes.otherHeading}>Interactive and Supportive Environment:</span> With interactive doubt sessions, regular assessments, and a supportive community, we ensure your academic journey is engaging and collaborative.</div>
        </div>
      </div>
      <PageEndingText mainHeader="Ready to start your journey? Explore our batches, register for the one that aligns with your aspirations, or inquire for more details to make an informed decision about your academic future. Your path to excellence begins here at Ayaan's Motion Academy." />
    </div>
  );
};
