import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';

import SliderIncomeList from './SliderIncomeList';

const SliderIncome = () => {
  const getIncome = useSelector(kapustaSelectors.getCategoryIncome);

  const [income, setIncome] = useState(getIncome);

  useEffect(() => {
    setIncome(getIncome);
  }, [getIncome]);

  return income ? <SliderIncomeList income={income} /> : <p>Spiner</p>;
};

export default SliderIncome;
