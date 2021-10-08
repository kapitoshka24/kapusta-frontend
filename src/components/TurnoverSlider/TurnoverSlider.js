import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './turnoverSlider.module.scss';
import Expenses from '../SliderExpenses';
import Income from '../SliderIncome/SliderIncome';

class TurnoverSlider extends Component {
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
      centerPadding: '3px',
      adaptiveHeight: true,
    };

    return (
      <div className={styles.sliderContainer}>
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
      </div>
    );
  }
}

export default TurnoverSlider;
