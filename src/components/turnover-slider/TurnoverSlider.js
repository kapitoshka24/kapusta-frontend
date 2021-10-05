import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../turnover-slider/TurnoverSlider.module.scss';

// Import Swiper styles

// import '../../../node_modules/swiper/navigation/navigation.scss';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/components/navigation/navigation.scss';

// D:\Courses\Programming\GoIT\goit-projects\GitHub\Final Project\Kapusta\kapusta-frontend\node_modules\swiper\swiper.scss

export default function TurnoverSlider() {
  return (
    <div className={styles.slider__block}>
      <div className={styles.prev}></div>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        direction="horizontal"
        // onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {/* <img
          src="../../img/slider/prev-arrow.png"
          className={styles.prev}
          alt="prevBtn"
        /> */}
        <div className={styles.swiper_sliders}>
          <SwiperSlide>
            <h2 className={styles.slider__text}>Расходы</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className={styles.slider__text}>Доходы</h2>
          </SwiperSlide>
        </div>
        {/* <img
          src="../../img/slider/next-arrow.png"
          className={styles.next}
          alt="nextBtn"
        /> */}
      </Swiper>
      <div className={styles.next}></div>
    </div>
  );
}
