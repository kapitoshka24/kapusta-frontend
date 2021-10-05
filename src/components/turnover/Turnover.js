import React from 'react';
import styles from './Turnover.module.scss';

let turnoverArr = [
  { id: 1, name: 'Расходы', value: 23 },
  { id: 2, name: 'Доходы', value: 300 },
];

export default function Turnover() {
  return (
    <>
      <section className={styles.turnover}>
        <ul className={styles.turnover__list}>
          {turnoverArr.map(turnoverItem => {
            let stringifiedValue = String(turnoverItem.value.toFixed(2));
            let transformedValue;
            if (stringifiedValue.length >= 7) {
              transformedValue =
                stringifiedValue.slice(0, stringifiedValue.length - 6) +
                ' ' +
                stringifiedValue.slice(stringifiedValue.length - 6) +
                ' грн.';
            } else {
              transformedValue = stringifiedValue + ' грн.';
            }

            return (
              <li key={turnoverItem.id} className={styles.turnover__item}>
                {turnoverItem.name} :
                {turnoverItem.name === 'Расходы' && (
                  <span
                    className={`${styles.turnover__value} ${styles.expense_color}`}
                  >
                    - {transformedValue}
                  </span>
                )}
                {turnoverItem.name === 'Доходы' && (
                  <span
                    className={`${styles.turnover__value} ${styles.income_color}`}
                  >
                    + {transformedValue}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
