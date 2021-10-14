import styles from './Calendar.module.scss';
import { ReactComponent as NextIcon } from '../../../images/next.svg';
import { ReactComponent as PreviousIcon } from '../../../images/previous.svg';

export default function Calendar({
  handleClick,
  months,
  pickedYear,
  pickedMonth,
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
          <PreviousIcon width="14" height="16" />
        </button>
        <p className={styles.currentYear}>{pickedYear}</p>
        <button
          type="button"
          className={styles.yearSwitcher}
          onClick={handleIncrementYear}
        >
          <NextIcon width="14" height="16" />
        </button>
      </div>
      <ul onClick={handleClick} className={styles.monthContainer}>
        {months.map(month => (
          <li
            className={`${styles.monthItem} ${
              pickedMonth === months.indexOf(month)
                ? styles.monthItem_current
                : ''
            }`}
            key={month}
            data-name={month}
          >
            <p className={styles.monthName}>{month}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
