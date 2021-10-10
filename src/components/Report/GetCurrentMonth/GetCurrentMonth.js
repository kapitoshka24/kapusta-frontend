import React from 'react';
import styles from './GetCurrentMonth.module.scss';
import { ReactComponent as NextIcon } from '../../../images/next.svg';
import { ReactComponent as PreviousIcon } from '../../../images/previous.svg';

function GetCurrentMonth() {
  return (
    <div className={styles.CurrentPeriodWidget}>
      <p className={styles.PeriodTitle}>Текущий период:</p>
      <div className={styles.CurrentMonthSwitcher}>
        <button type="button" className={styles.MonthSwitcher}>
          <PreviousIcon width="7" height="12" />
        </button>
        <p className={styles.CurrentPeriod}>НОЯБРЬ 2019</p>
        <button type="button" className={styles.MonthSwitcher}>
          <NextIcon width="7" height="12" />
        </button>
      </div>
    </div>
  );
}

export default GetCurrentMonth;
