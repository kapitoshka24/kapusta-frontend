import React from 'react';
import styles from './Expenses.module.scss';

let expensesArr = [
  {
    id: 1,
    amount: 5000,
    svg: '../../../public/expenses-sprite.svg#products',
    // img: '../../img/separate-icons/expenses-products.svg',
    // png: '../../../public/png/expenses-alcohol.png',
    name: 'Продукты',
  },
  {
    id: 2,
    amount: 200,
    svg: '../../../public/expenses-sprite.svg#alcohol',
    // img: '../../img/separate-icons/expenses-alcohol.svg',
    // png: '../../../public/png/expenses-alcohol.png',
    name: 'Алкоголь',
  },
  {
    id: 3,
    amount: 800,
    svg: '../../../public/expenses-sprite.svg#entertainment',
    // img: '../../img/separate-icons/expenses-entertainment.svg',
    // png: '../../img/separate-icons/png/expenses-entertainment.png',
    name: 'Развлечение',
  },
  {
    id: 4,
    amount: 900,
    svg: '../../../public/expenses-sprite.svg#health',
    // img: '../../img/separate-icons/expenses-health.svg',
    // png: '../../img/separate-icons/png/expenses-health.png',
    name: 'Здоровье',
  },
  {
    id: 5,
    amount: 2000,
    svg: '../../../public/expenses-sprite.svg#transport',
    // img: '../../img/separate-icons/expenses-transport.svg',
    // png: '../../img/separate-icons/png/expenses-transport.png',
    name: 'Транспорт',
  },
  {
    id: 6,
    amount: 1500,
    svg: '../../../public/expenses-sprite.svg#everything-for-house',
    // img: '../../img/separate-icons/expenses-everything-for-the-house.svg',
    // png: '../../img/separate-icons/png/expenses-everything-for-house.png',
    name: 'Все для дома',
  },
  {
    id: 7,
    amount: 800,
    svg: '../../../public/expenses-sprite.svg#technical-equipment',
    // img: '../../img/separate-icons/expenses-technical-equipment.svg',
    // png: '../../img/separate-icons/png/expenses-technical-equipment.png',
    name: 'Техника',
  },
  {
    id: 8,
    amount: 2200,
    svg: '../../../public/expenses-sprite.svg#utilities-connection',
    // img: '../../img/separate-icons/expenses-utilities&connection.svg',
    // png: '../../img/separate-icons/png/expenses-utilities-connection.png',
    name: 'Коммуналка, связь',
  },
  {
    id: 9,
    amount: 1800,
    svg: '../../../public/expenses-sprite.svg#sport-hobby',
    // img: '../../img/separate-icons/expenses-sport&hobby.svg',
    // png: '../../img/separate-icons/png/expenses-sport-hobby.png',
    name: 'Спорт, Хобби',
  },
  {
    id: 10,
    amount: 2400,
    svg: '../../../public/expenses-sprite.svg#education',
    // img: '../../img/separate-icons/expenses-education.svg',
    // png: '../../img/separate-icons/png/expenses-education.png',
    name: 'Образование',
  },
  {
    id: 11,
    amount: 3000,
    svg: '../../../public/expenses-sprite.svg#other',
    // img: '../../img/separate-icons/expenses-other.svg',
    // png: '../../img/separate-icons/png/expenses-other.png',
    name: 'Прочее',
  },
];

let filteredArr = [];
export default function Expenses() {
  return (
    <>
      <section className={styles.expenses}>
        <ul className={styles.expenses__list}>
          {expensesArr
            .filter(expensesItem => {
              return expensesItem.amount > 0;
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
                console.log(stringifiedAmount);
              }
              // console.log(filteredArr.length);
              return (
                <li key={filteredItem.id} className={styles.expenses__card}>
                  <p className={styles.expenses__amount}>{transformedAmount}</p>
                  <div className={styles.expenses__img}>
                    {/* <img
                      className={styles.expenses__icon}
                      src={filteredItem.png}
                      alt="icon"
                      width="60"
                      height="60"
                    /> */}
                    <svg className={styles.expense__icon}>
                      <use href={filteredItem.svg}></use>
                    </svg>
                  </div>
                  <p className={styles.expenses__name}>{filteredItem.name}</p>
                </li>
              );
            })}
          {filteredArr.length % 3 !== 0 && (
            <div className={styles.expenses__empty}></div>
          )}
        </ul>
      </section>
    </>
  );
}
