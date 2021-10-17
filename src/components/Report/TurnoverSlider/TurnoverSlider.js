import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './TurnoverSlider.module.scss';
import SliderExpenses from '../SliderExpenses';
import SliderIncome from '../SliderIncome/SliderIncome';
import { connect } from 'react-redux';
import { kapustaOperations } from '../../../redux/operations';
import { kapustaSelectors } from '../../../redux/selectors';

//* tesing start
import Chart from '../../ExpenseIncome/Chart';
//* testing end
class TurnoverSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3,
    });
  }

  componentDidUpdate() {
    const { month, year, fetchSumCategory } = this.props;
    fetchSumCategory(month + 1, year);
  }
  render() {
    const settingsSmall = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider__big',
      // adaptiveHeight: true,
    };
    const settingsBig = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider',
      centerPadding: '3px',
      // adaptiveHeight: true,
    };

    return (
      <>
        <div className={styles.sliderContainer}>
          <Slider
            {...settingsSmall}
            className={styles.slider}
            asNavFor={this.state.nav3}
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
              <SliderExpenses />
            </div>
            <div className={styles.slider_big__item}>
              <SliderIncome />
            </div>
          </Slider>
        </div>
        {/* testing start */}
        <Slider
          {...settingsBig}
          className={styles.slider__big}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider3 = slider)}
        >
          <div className={styles.slider_big__item}>
            <Chart
              data={[
                { _id: 'goods', sum: 1000 },
                { _id: 'sport', sum: 500 },
              ]}
            />
          </div>
          <div className={styles.slider_big__item}>
            <Chart
              data={[
                { _id: 'events', sum: 5000 },
                { _id: 'health', sum: 999 },
              ]}
            />
          </div>
        </Slider>
        {/* testing end */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  month: kapustaSelectors.getReportMonth(state),
  year: kapustaSelectors.getReportYear(state),
});

const mapDispatchToProps = dispatch => ({
  fetchSumCategory: (month, year) =>
    dispatch(kapustaOperations.fetchSumCategory(month, year)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TurnoverSlider);
