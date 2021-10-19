import styles from './SliderExpenses.module.scss';
import sprite from './expenses-sprite.svg';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import kapustaOperations from '../../../redux/operations/kapusta-operations';
import kapustaSelectors from '../../../redux/selectors/kapusta-selectors';

const names = {
  products: 'Продукты',
  alcohol: 'Алкоголь',
  entertainment: 'Развлечение',
  health: 'Здоровье',
  transport: 'Транспорт',
  housing: 'Все для дома',
  technique: 'Техника',
  utilityCommunication: 'Коммуналка,связь',
  sportsHobbies: 'Спорт,хобби',
  education: 'Образование',
  other: 'Прочее',
};

const SliderExpensesList = ({ expenses }) => {
  const dispatch = useDispatch();
  const month = useSelector(kapustaSelectors.getReportMonth);
  const year = useSelector(kapustaSelectors.getReportYear);

  const handleExpensesClick = e => {
    const category = e.currentTarget.dataset.value;
    dispatch(kapustaOperations.fetchCategoryDetails(month + 1, year, category));
  };
  const index = shortid();
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
export default SliderExpensesList;
