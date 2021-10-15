import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import { kapustaOperations } from '../../../redux/operations';
import SliderIncomeList from './SliderIncomeList';

const SliderIncome = () => {
  const getIncome = useSelector(kapustaSelectors.getCategoryIncome);
  const dispatch = useDispatch();
  const [income, setIncome] = useState(getIncome);

  useEffect(() => {
    dispatch(kapustaOperations.fetchSumCategory());
  }, [dispatch]);
  useEffect(() => {
    setIncome(getIncome);
  }, [getIncome]);

  return income ? <SliderIncomeList income={income} /> : <p>Spiner</p>;
};

export default SliderIncome;
