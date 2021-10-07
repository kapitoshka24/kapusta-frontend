import React from 'react';
import styles from './Income.module.scss';
import sprite from '../../img/expenses-income-img/income-sprite.svg';

let incomeArr = [
  {
    id: 1,
    amount: 45000,
    // svg: '../../img/expenses-income-img/expenses-sprite.svg#products',
    svg: sprite + '#salary',
    name: 'ЗП',
  },
  {
    id: 2,
    amount: 1500,
    // svg: '../../../public/expenses-sprite.svg#alcohol',
    svg: sprite + '#add-income',
    name: 'Доп.доход',
  },
];

let filteredArr = [];
export default function Income() {
  return (
    <>
      <section className={styles.income}>
        <ul className={styles.income__list}>
          {incomeArr
            .filter(incomeItem => {
              return incomeItem.amount > 0;
            })
            .map(filteredItem => {
              filteredArr.push(filteredItem);
              let stringifiedAmount = String(filteredItem.amount.toFixed(2));
              let transformedAmount;
              if (stringifiedAmount.length >= 7) {
                transformedAmount =
                  stringifiedAmount.slice(0, stringifiedAmount.length - 6) +
                  ' ' +
                  stringifiedAmount.slice(stringifiedAmount.length - 6);
              } else {
                transformedAmount = stringifiedAmount;
              }

              return (
                <li key={filteredItem.id} className={styles.income__card}>
                  <p className={styles.income__amount}>{transformedAmount}</p>
                  <div className={styles.income__img}>
                    <svg className={styles.income__icon} width="56" height="56">
                      <use href={filteredItem.svg}></use>
                    </svg>
                  </div>
                  <p className={styles.income__name}>{filteredItem.name}</p>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
}
