import { useSelector } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import SliderExpensesList from './SliderExpensesList';
import SliderNotification from '../SliderNotification';
// import Loader from 'react-loader-spinner';

const SliderExpenses = () => {
  const expenses = useSelector(kapustaSelectors.getCategoryExpenses);

  return (
    <>
      {expenses && expenses.length > 0 ? (
        <SliderExpensesList expenses={expenses} />
      ) : (
        <SliderNotification category="расходов" />
      )}

      {/* {true && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Loader type="ThreeDots" color="#FF751D" height={50} width={50} />
        </div>
      )} */}
    </>
  );
};

export default SliderExpenses;
