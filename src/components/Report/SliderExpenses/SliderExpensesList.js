import styles from './SliderExpenses.module.scss';
import sprite from './expenses-sprite.svg';

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
  return (
    <ul className={styles.expensesList}>
      {expenses.map(({ _id, total }) => {
        return (
          <li key={_id} className={styles.expensesListItem}>
            <p className={styles.amount}>{total.toFixed(2)}</p>
            <div className={styles.iconContainer}>
              <svg className={styles.icon}>
                <use href={`${sprite}#${_id}`}></use>
              </svg>
            </div>
            <p className={styles.name}>{names[_id]}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default SliderExpensesList;
