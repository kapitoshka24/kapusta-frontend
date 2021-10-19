import SliderExpensesList from './SliderExpensesList';
import SliderNotification from '../SliderNotification';

const SliderExpenses = ({ expenses }) => {
  return expenses?.length > 0 ? (
    <SliderExpensesList expenses={expenses} />
  ) : (
    <SliderNotification category="расходов" />
  );
};

export default SliderExpenses;
