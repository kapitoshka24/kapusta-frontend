import React from 'react';
import styles from './Turnover.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kapustaOperations } from '../../../redux/operations';

const Turnover = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(kapustaOperations.fetchSumCategory());
  }, [dispatch]);

  const expenses = '1281.00';
  const income = '4100.00';

  return (
    <div className={styles.turnoverContainer}>
      <div className={styles.contentContainer}>
        <p className={styles.expenses}>
          Расходы:
          <span className={styles.expensesContent}>{`- ${
            expenses.length > 8 ? `${expenses.substring(0, 7)}...` : expenses
          } грн.`}</span>
        </p>
      </div>
      <span className={styles.verticalLine}></span>
      <div className={styles.contentContainer}>
        <p className={styles.income}>
          Доходы:
          <span className={styles.incomeContent}>
            {`+ ${
              income.length > 8 ? `${income.substring(0, 7)}...` : income
            } грн.`}
          </span>
        </p>
      </div>
    </div>
  );
};
export default Turnover;
