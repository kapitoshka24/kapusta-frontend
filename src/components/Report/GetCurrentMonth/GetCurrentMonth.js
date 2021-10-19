import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './GetCurrentMonth.module.scss';
import MONTHS from '../../../helpers/months';
import selectors from '../../../redux/selectors/kapusta-selectors';
import actions from '../../../redux/actions/kapusta-actions';
import operations from '../../../redux/operations/kapusta-operations';
import { ReactComponent as NextIcon } from '../../../images/next.svg';
import { ReactComponent as PreviousIcon } from '../../../images/previous.svg';
import Calendar from '../Calendar';

function GetCurrentMonth() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.calculateAvailableYears());
  }, [dispatch]);

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const month = useSelector(selectors.getReportMonth);
  const year = useSelector(selectors.getReportYear);
  const years = useSelector(selectors.getReportYears);

  const handleCalendarToggle = () => {
    setCalendarIsOpen(prevCalendarIsOpen => !prevCalendarIsOpen);
  };

  const handleIncrementMonth = () => {
    if (month !== MONTHS.length - 1 && month < new Date().getMonth()) {
      dispatch(actions.incrementReportMonth());
      return;
    }

    if (year === years[years.length - 1]) {
      return;
    }

    dispatch(actions.incrementReportYear());
    dispatch(actions.changeReportMonth(0));
  };

  const handleDecrementMonth = () => {
    if (month !== 0) {
      dispatch(actions.decrementReportMonth());
      return;
    }

    if (year === years[0]) {
      return;
    }

    dispatch(actions.decrementReportYear());
    dispatch(actions.changeReportMonth(MONTHS.length - 1));
  };

  return (
    <div className={styles.CurrentPeriodWidget}>
      <p className={styles.PeriodTitle}>Текущий период:</p>
      <div className={styles.CurrentMonthSwitcher}>
        <button
          type="button"
          className={styles.MonthSwitcher}
          onClick={handleDecrementMonth}
        >
          <PreviousIcon width="7" height="12" />
        </button>
        <p onClick={handleCalendarToggle} className={styles.CurrentPeriod}>
          {`${MONTHS[month]} ${year}`}
        </p>
        <button
          type="button"
          className={styles.MonthSwitcher}
          onClick={handleIncrementMonth}
        >
          <NextIcon width="7" height="12" />
        </button>
      </div>
      {calendarIsOpen && (
        <Calendar
          handleCalendarToggle={handleCalendarToggle}
          calendarIsOpen={calendarIsOpen}
          setCalendarIsOpen={setCalendarIsOpen}
        />
      )}
    </div>
  );
}

export default GetCurrentMonth;
