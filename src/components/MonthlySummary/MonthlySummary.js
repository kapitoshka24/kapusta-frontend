import React from 'react';
import styles from './MonthlySummary.module.scss';


function MonthlySummary() {
  return (
    <div className={styles.SummaryWidget}>
        <h2 className={styles.SummaryTitle}>Сводка</h2>
        <ul className={styles.MonthList}>
            <li className={styles.MonthItem}>
                <span>Month1</span>
                <span>Sum1</span>
            </li>
            <li className={styles.MonthItem}>
                <span>Month2</span>
                <span>Sum2</span>
            </li>
            <li className={styles.MonthItem}>
                <span>Month3</span>
                <span>Sum3</span>
            </li>
            <li className={styles.MonthItem}>
                <span>Month4</span>
                <span>Sum4</span>
            </li>
            <li className={styles.MonthItem}>
                <span>Month5</span>
                <span>Sum5</span>
            </li>
        </ul>
    </div>
  );
}

export default MonthlySummary;
