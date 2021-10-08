import React from 'react';
import expensesCategory from './expensesCategory.json';
import styles from './sliderExpenses.module.scss';
import sprite from './expenses-sprite.svg';

const SliderExpenses = () => {
  return (
    <ul className={styles.expensesList}>
      {expensesCategory.map(({ id, amount, name, type }) => {
        return (
          <li key={id} className={styles.expensesListItem}>
            <p className={styles.amount}>{amount.toFixed(2)}</p>
            <div className={styles.iconContainer}>
              <svg className={styles.icon}>
                <use href={`${sprite}#${type}`}></use>
              </svg>
            </div>
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SliderExpenses;
