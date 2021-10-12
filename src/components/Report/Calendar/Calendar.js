import styles from './Calendar.module.scss';
import { ReactComponent as NextIcon } from '../../../images/next.svg';
import { ReactComponent as PreviousIcon } from '../../../images/previous.svg';

export default function Calendar({
  handleClick,
  months,
  currentYear,
  handleIncrementYear,
  handleDecrementYear,
}) {
  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.currentYearSwitcher}>
        <button
          type="button"
          className={styles.yearSwitcher}
          onClick={handleDecrementYear}
        >
          <PreviousIcon width="10" height="12" />
        </button>
        <p className={styles.currentYear}>{currentYear}</p>
        <button
          type="button"
          className={styles.yearSwitcher}
          onClick={handleIncrementYear}
        >
          <NextIcon width="10" height="12" />
        </button>
      </div>
      <ul onClick={handleClick} className={styles.monthContainer}>
        {months.map(month => (
          <li className={styles.monthItem} key={month} data-name={month}>
            <p className={styles.monthName}>{month}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
