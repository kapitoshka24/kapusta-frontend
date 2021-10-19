import styles from './SliderExpenses.module.scss';
import sprite from './expenses-sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import kapustaOperations from '../../../redux/operations/kapusta-operations';
import kapustaSelectors from '../../../redux/selectors/kapusta-selectors';
import { expenseOptions } from '../../../helpers/expenseOptions';

const SliderExpensesList = ({ expenses }) => {
  const dispatch = useDispatch();
  const month = useSelector(kapustaSelectors.getReportMonth);
  const year = useSelector(kapustaSelectors.getReportYear);

  const handleExpensesClick = e => {
    const category = e.currentTarget.dataset.value;
    dispatch(
      kapustaOperations.fetchCategoryExpensesDetails(month + 1, year, category),
    );
  };
  return (
    <ul className={styles.expensesList}>
      {expenses.map(({ _id, total }) => {
        return (
          <li
            key={_id}
            className={styles.expensesListItem}
            onClick={handleExpensesClick}
            data-value={_id}
          >
            <p className={styles.amount}>{total.toFixed(2)}</p>
            <div tabIndex="0" className={styles.iconContainer}>
              <svg tabIndex="0" className={styles.icon}>
                <use href={`${sprite}#${_id}`}></use>
              </svg>
            </div>
            <p className={styles.name}>{expenseOptions[_id]}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default SliderExpensesList;
