import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../MonthlySummary/MonthlySummary.module.scss';
import { kapustaSelectors } from '../../../redux/selectors/';
import { kapustaOperations } from '../../../redux/operations/';

function MonthlySummary() {
  const dispatch = useDispatch();
  const list = useSelector(kapustaSelectors.getMonthlySummaryIncome);

  const onFetchMonthlySummaryIncome = useCallback(
    () => dispatch(kapustaOperations.fetchMonthlySummaryIncome()),
    [dispatch],
  );
  useEffect(() => onFetchMonthlySummaryIncome(), [onFetchMonthlySummaryIncome]);

  return (
    <div className={styles.SummaryWidget}>
      <h2 className={styles.SummaryTitle}>Сводка</h2>
      <ul className={styles.MonthList}>
        {list.map(({ _id, total }) => (
          <li key={_id} className={styles.MonthItem}>
            <span>{_id}</span>
            <span>{Number.parseFloat(total).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonthlySummary;
