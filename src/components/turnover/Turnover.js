import React from 'react';
import styles from './Turnover.module.scss';

export default function Turnover() {
  const turnoverArr = [23000, 300];

  return (
    <div className={styles.turnover}>
      <ul className={styles.turnover__list}>
        <li className={styles.turnover__item}>
          Расходы
          <span className={`${styles.turnover__value} ${styles.expense_color}`}>
            - {turnoverArr[0]} грн.
          </span>
        </li>
        <div className={styles.verticalLine}></div>
        <li className={styles.turnover__item}>
          Доходы
          <span className={`${styles.turnover__value} ${styles.income_color}`}>
            + {turnoverArr[1]} грн.
          </span>
        </li>
      </ul>
    </div>
  );
}
