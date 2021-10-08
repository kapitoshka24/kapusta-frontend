import React from 'react';
import styles from './sliderIncome.module.scss';
import incomeCategory from './incomeCategory.json';
import sprite from './income-sprite.svg';

const SliderIncome = () => {
  return (
    <ul className={styles.incomeList}>
      {incomeCategory.map(({ id, amount, name, type }) => {
        return (
          <li key={id} className={styles.incomeListItem}>
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

export default SliderIncome;
