import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';
import SliderExpensesList from './SliderExpensesList';

const SliderExpenses = () => {
  const getExpenses = useSelector(kapustaSelectors.getCategoryExpenses);
  const dispatch = useDispatch();
  const [expenses, setExpenses] = useState(getExpenses);

  useEffect(() => {
    dispatch(kapustaOperations.fetchSumCategory());
  }, [dispatch]);
  useEffect(() => {
    setExpenses(getExpenses);
  }, [getExpenses]);

  return expenses ? <SliderExpensesList expenses={expenses} /> : <p>Spiner</p>;
};

export default SliderExpenses;
