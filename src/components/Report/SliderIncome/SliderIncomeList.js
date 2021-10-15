import styles from './SliderIncome.module.scss';
import sprite from './income-sprite.svg';

const names = {
  otherIncome: 'Доп.доход',
  salary: 'ЗП',
};

const SliderIncomeList = ({ income }) => {
  return (
    <ul className={styles.incomeList}>
      {income.map(({ _id, total }) => {
        return (
          <li key={_id} className={styles.incomeListItem}>
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

export default SliderIncomeList;
