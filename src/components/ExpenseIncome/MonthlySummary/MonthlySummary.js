import React from 'react';
import styles from './MonthlySummary.module.scss';

function MonthlySummary() {
  return (
    <div className={styles.SummaryWidget}>
      <h2 className={styles.SummaryTitle}>Сводка</h2>
      <ul className={styles.MonthList}>
        <li className={styles.MonthItem}>
          <span>НОЯБРЬ</span>
          <span>25 500.00</span>
        </li>
        <li className={styles.MonthItem}>
          <span>ОКТЯБРЬ</span>
          <span>25 000.00</span>
        </li>
        <li className={styles.MonthItem}>
          <span>СЕНТЯБРЬ</span>
          <span>25 000.00</span>
        </li>
        <li className={styles.MonthItem}>
          <span>АВГУСТ</span>
          <span>20 000.00</span>
        </li>
        <li className={styles.MonthItem}>
          <span>ИЮЛЬ</span>
          <span>20 000.00</span>
        </li>
        <li className={styles.MonthItem}>
          <span>ИЮНЬ</span>
          <span>18 000.00</span>
        </li>
        <li className={styles.MonthItem}>
          <span>МАЙ</span>
          <span>18 000.00</span>
        </li>
        <li className={styles.MonthItem}>
          <span>АПРЕЛЬ</span>
          <span>18 000.00</span>
        </li>
      </ul>
    </div>
  );
}

export default MonthlySummary;
