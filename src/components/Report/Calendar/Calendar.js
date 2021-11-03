import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import styles from './Calendar.module.scss';
import MONTHS from '../../../helpers/months';
import selectors from '../../../redux/selectors/kapusta-selectors';
import actions from '../../../redux/actions/kapusta-actions';
import { ReactComponent as NextIcon } from '../../../images/next.svg';
import { ReactComponent as PreviousIcon } from '../../../images/previous.svg';

export default function Calendar({ handleCalendarToggle, setCalendarIsOpen }) {
  const month = useSelector(selectors.getReportMonth);
  const year = useSelector(selectors.getReportYear);
  const years = useSelector(selectors.getReportYears);

  const dispatch = useDispatch();

  const calendarContainer = useRef();

  useEffect(() => {
    const onClickOutsideHandler = e => {
      if (!calendarContainer.current) {
        return;
      }
      if (
        !calendarContainer.current ||
        e.target.nodeName === 'LI' ||
        calendarContainer.current.contains(e.target)
      ) {
        return;
      }
      setCalendarIsOpen(false);
    };
    window.addEventListener('click', onClickOutsideHandler);
    return () => {
      window.removeEventListener('click', onClickOutsideHandler);
    };
  }, [setCalendarIsOpen]);

  const onListClick = e => {
    if (e.target === e.currentTarget) {
      return;
    }

    const { name, disabled } = e.target.dataset;

    if (!JSON.parse(disabled)) {
      dispatch(actions.changeReportMonth(MONTHS.indexOf(name)));
      handleCalendarToggle();
    }
  };

  const handleIncrementYear = () => {
    const currentYearIndex = years.findIndex(el => el === year);
    if (currentYearIndex === years.length - 1) {
      return;
    }
    dispatch(actions.incrementReportYear());
  };

  const handleDecrementYear = () => {
    const currentYearIndex = years.findIndex(el => el === year);
    if (currentYearIndex === 0) {
      return;
    }
    dispatch(actions.decrementReportYear());
  };
  return (
    <div className={styles.calendarWrapper} ref={calendarContainer}>
      <div className={styles.currentYearSwitcher}>
        <button
          type="button"
          className={styles.yearSwitcher}
          onClick={handleDecrementYear}
        >
          <PreviousIcon width="14" height="16" />
        </button>
        <p className={styles.currentYear}>{year}</p>
        <button
          type="button"
          className={styles.yearSwitcher}
          onClick={handleIncrementYear}
        >
          <NextIcon width="14" height="16" />
        </button>
      </div>
      <ul onClick={onListClick} className={styles.monthContainer}>
        {MONTHS.map((monthEl, i) => (
          <li
            className={`${styles.monthItem} ${
              month === MONTHS.indexOf(monthEl) ? styles.monthItem_current : ''
            }`}
            key={monthEl}
            data-name={monthEl}
            data-disabled={i > new Date().getMonth()}
          >
            <p className={styles.monthName}>{monthEl}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
