import { useSelector } from 'react-redux';
import { kapustaSelectors } from '../../../redux/selectors';
import SliderIncomeList from './SliderIncomeList';
import SliderNotification from '../SliderNotification';

const SliderIncome = () => {
  const income = useSelector(kapustaSelectors.getCategoryIncome);

  return (
    <>
      {income && income.length > 0 ? (
        <SliderIncomeList income={income} />
      ) : (
        <SliderNotification category="доходов" />
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

export default SliderIncome;
