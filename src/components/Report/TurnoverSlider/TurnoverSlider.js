import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { kapustaOperations } from '../../../redux/operations';
import { kapustaSelectors } from '../../../redux/selectors';

import SliderExpenses from '../SliderExpenses';
import SliderIncome from '../SliderIncome/SliderIncome';
import Chart from '../../Report/Chart';

import styles from './TurnoverSlider.module.scss';

export default function TurnoverSlider() {
  const dispatch = useDispatch();

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);

  const month = useSelector(kapustaSelectors.getReportMonth);
  const year = useSelector(kapustaSelectors.getReportYear);
  const expenses = useSelector(kapustaSelectors.getCategoryExpenses);
  const expensesChartData = useSelector(kapustaSelectors.getExpensesChartData);
  const incomeChartData = useSelector(kapustaSelectors.getIncomeChartData);

  useEffect(() => {
    dispatch(kapustaOperations.fetchCategoryesChartData(month + 1, year));

    dispatch(kapustaOperations.fetchSumCategory(month + 1, year));
  }, [dispatch, month, year]);

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
    <>
      <div className={styles.sliderContainer}>
        <Slider
          {...settingsSmall}
          className={styles.slider}
          asNavFor={nav3}
          ref={slider => setNav1(slider)}
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
          asNavFor={nav1}
          ref={slider => setNav2(slider)}
        >
          <div className={styles.slider_big__item}>
            <SliderExpenses expenses={expenses} />
          </div>
          <div className={styles.slider_big__item}>
            <SliderIncome />
          </div>
        </Slider>
      </div>
      <div className={styles.sliderContainerBottom}>
        <Slider
          {...settingsBig}
          className={styles.slider__big}
          asNavFor={nav2}
          ref={slider => setNav3(slider)}
        >
          <div className={styles.slider_big__item}>
            <Chart data={expensesChartData} />
          </div>
          <div className={styles.slider_big__item}>
            <Chart data={incomeChartData} />
          </div>
        </Slider>
      </div>
    </>
  );
}
