import styles from './SliderIncome.module.scss';
import sprite from './income-sprite.svg';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import kapustaOperations from '../../../redux/operations/kapusta-operations';
import kapustaSelectors from '../../../redux/selectors/kapusta-selectors';

const names = {
  otherIncome: 'Доп.доход',
  salary: 'ЗП',
};

const SliderIncomeList = ({ income }) => {
  const dispatch = useDispatch();
  const month = useSelector(kapustaSelectors.getReportMonth);
  const year = useSelector(kapustaSelectors.getReportYear);

  const handleIncomeClick = e => {
    const category = e.currentTarget.dataset.value;
    dispatch(kapustaOperations.fetchCategoryDetails(month + 1, year, category));
  };
  const index = shortid();
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
              <div className={styles.iconBlock} tabIndex={index}>
                <svg className={styles.icon}>
                  <use href={`${sprite}#${_id}`}></use>
                </svg>
              </div>
            </div>
            <p className={styles.name}>{names[_id]}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SliderIncomeList;
