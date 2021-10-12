import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MonthlySummary.module.scss';
import { kapustaSelectors } from '../../../redux/selectors/';
import { kapustaOperations } from '../../../redux/operations/';

function MonthlySummary() {
  const dispatch = useDispatch();
  const list = useSelector(kapustaSelectors.getMonthlySummary);

  const onFetchMonthlySummary = useCallback(
    () => dispatch(kapustaOperations.fetchMonthlySummary()),
    [dispatch],
  );
  useEffect(() => onFetchMonthlySummary(), [onFetchMonthlySummary]);

  return (
    <div className={styles.SummaryWidget}>
      <h2 className={styles.SummaryTitle}>Сводка</h2>
      <ul className={styles.MonthList}>
        {list.map(({ _id, total }) => (
          <li key={_id} className={styles.MonthItem}>
            <span>{_id}</span>
            <span>{total}</span>
          </li>
        ))}
        {/* <li className={styles.MonthItem}>
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
        </li> */}
      </ul>
    </div>
  );
}

export default MonthlySummary;
