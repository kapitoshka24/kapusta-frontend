import { useSelector } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import SliderExpensesList from './SliderExpensesList';
import SliderNotification from '../SliderNotification';

const SliderExpenses = () => {
  const expenses = useSelector(kapustaSelectors.getCategoryExpenses);

  return expenses && expenses.length > 0 ? (
    <SliderExpensesList expenses={expenses} />
  ) : (
    <SliderNotification category="расходов" />
  );
};

export default SliderExpenses;
