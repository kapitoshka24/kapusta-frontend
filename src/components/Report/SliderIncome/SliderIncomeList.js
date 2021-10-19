import styles from './SliderIncome.module.scss';
import sprite from './income-sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import kapustaOperations from '../../../redux/operations/kapusta-operations';
import kapustaSelectors from '../../../redux/selectors/kapusta-selectors';
import { incomeOptions } from '../../../helpers/incomeOptions';

const SliderIncomeList = ({ income }) => {
  const dispatch = useDispatch();
  const month = useSelector(kapustaSelectors.getReportMonth);
  const year = useSelector(kapustaSelectors.getReportYear);

  const handleIncomeClick = e => {
    const category = e.currentTarget.dataset.value;
    dispatch(
      kapustaOperations.fetchCategoryIncomeDetails(month + 1, year, category),
    );
  };
  return (
    <ul className={styles.incomeList}>
      {income.map(({ _id, total }) => {
        return (
          <li
            key={_id}
            className={styles.incomeListItem}
            onClick={handleIncomeClick}
            data-value={_id}
          >
            <p className={styles.amount}>{total.toFixed(2)}</p>
            <div className={styles.iconContainer}>
              <svg tabIndex="0" className={styles.icon}>
                <use href={`${sprite}#${_id}`}></use>
              </svg>
            </div>
            <p className={styles.name}>{incomeOptions[_id]}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SliderIncomeList;
