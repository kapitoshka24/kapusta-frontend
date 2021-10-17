import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';

import SliderExpensesList from './SliderExpensesList';

const SliderExpenses = () => {
  const getExpenses = useSelector(kapustaSelectors.getCategoryExpenses);

  const [expenses, setExpenses] = useState(getExpenses);

  useEffect(() => {
    setExpenses(getExpenses);
  }, [getExpenses]);

  return expenses ? <SliderExpensesList expenses={expenses} /> : <p>Spiner</p>;
};

export default SliderExpenses;
