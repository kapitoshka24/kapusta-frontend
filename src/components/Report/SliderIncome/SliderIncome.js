import { useSelector } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import SliderIncomeList from './SliderIncomeList';
import SliderNotification from '../SliderNotification';

const SliderIncome = () => {
  const income = useSelector(kapustaSelectors.getCategoryIncome);

  return income && income.length > 0 ? (
    <SliderIncomeList income={income} />
  ) : (
    <SliderNotification category="доходов" />
  );
};

export default SliderIncome;
