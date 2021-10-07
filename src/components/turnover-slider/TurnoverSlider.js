<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from '../Turnover-slider/TurnoverSlider.module.scss';
import Expenses from '../expenses/Expenses';
import Income from '../income/Income';

class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    const settingsSmall = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider__big',
    };
    const settingsBig = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider',
    };

    return (
      <>
        <Slider
          {...settingsSmall}
          className={styles.slider}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div className={styles.slider__item}>
            <h2 className={styles.slider__text}>Расходы</h2>
          </div>
          <div className={styles.slider__item}>
            <h2 className={styles.slider__text}>Доходы</h2>
          </div>
        </Slider>

        <Slider
          {...settingsBig}
          className={styles.slider__big}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
        >
          <div className={styles.slider_big__item}>
            <Expenses />
          </div>
          <div className={styles.slider_big__item}>
            <Income />
          </div>
        </Slider>
      </>
    );
  }
}

export default AsNavFor;
||||||| parent of 55e25ef ([Expenses] Add HTML/SCSS with problems)
=======
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
||||||| parent of 91a31e8 ([Expenses, Slider, Income] Add HTML, CSS, JS; (colors should be substituted by variables))
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
=======
import React, { Component } from 'react';
import Slider from 'react-slick';
>>>>>>> 91a31e8 ([Expenses, Slider, Income] Add HTML, CSS, JS; (colors should be substituted by variables))
import styles from '../turnover-slider/TurnoverSlider.module.scss';
import Expenses from '../expenses/Expenses';
import Income from '../income/Income';

class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    const settingsSmall = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider__big',
    };
    const settingsBig = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider',
    };

    return (
      <>
        <Slider
          {...settingsSmall}
          className={styles.slider}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div className={styles.slider__item}>
            <h2 className={styles.slider__text}>Расходы</h2>
          </div>
          <div className={styles.slider__item}>
            <h2 className={styles.slider__text}>Доходы</h2>
          </div>
        </Slider>

        <Slider
          {...settingsBig}
          className={styles.slider__big}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
        >
          <div className={styles.slider_big__item}>
            <Expenses />
          </div>
          <div className={styles.slider_big__item}>
            <Income />
          </div>
        </Slider>
      </>
    );
  }
}
<<<<<<< HEAD
>>>>>>> 55e25ef ([Expenses] Add HTML/SCSS with problems)
||||||| parent of 91a31e8 ([Expenses, Slider, Income] Add HTML, CSS, JS; (colors should be substituted by variables))
=======

export default AsNavFor;
>>>>>>> 91a31e8 ([Expenses, Slider, Income] Add HTML, CSS, JS; (colors should be substituted by variables))
