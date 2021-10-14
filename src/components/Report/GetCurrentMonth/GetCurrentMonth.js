import { useState } from 'react';
import styles from './GetCurrentMonth.module.scss';
import { ReactComponent as NextIcon } from '../../../images/next.svg';
import { ReactComponent as PreviousIcon } from '../../../images/previous.svg';
import Calendar from '../Calendar';

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

function GetCurrentMonth() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const getYears = (fromYear, toYear) => {
    const years = [fromYear];

    while (years[years.length - 1] !== toYear) {
      years.push(years[years.length - 1] + 1);
    }

    return years;
  };

  const years = getYears(2019, currentYear);

  const handleCalendarOpen = () => {
    setCalendarIsOpen(prevCalendarIsOpen => !prevCalendarIsOpen);
  };

  const onListClick = e => {
    const pickedMonth = e.target.dataset.name;
    setMonth(MONTHS.findIndex(month => month === pickedMonth));
    setCalendarIsOpen(false);
  };

  const handleIncrementMonth = () => {
    if (month !== MONTHS.length - 1) {
      setMonth(prevMonth => prevMonth + 1);
      return;
    }

    if (year === years[years.length - 1]) {
      return;
    }

    setMonth(0);

    setYear(prevYear => {
      return prevYear === years[years.length - 1] ? prevYear : prevYear + 1;
    });
  };

  const handleDecrementMonth = () => {
    if (month !== 0) {
      setMonth(prevMonth => prevMonth - 1);
      return;
    }

    if (year === years[0]) {
      return;
    }

    setMonth(MONTHS.length - 1);

    setYear(prevYear => {
      return prevYear === years[0] ? prevYear : prevYear - 1;
    });
  };

  const handleIncrementYear = () => {
    const currentYearIndex = years.findIndex(el => el === year);
    if (currentYearIndex === years.length - 1) {
      return;
    }
    setYear(years[currentYearIndex + 1]);
  };

  const handleDecrementYear = () => {
    const currentYearIndex = years.findIndex(el => el === year);
    if (currentYearIndex === 0) {
      return;
    }
    setYear(years[currentYearIndex - 1]);
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
        <p onClick={handleCalendarOpen} className={styles.CurrentPeriod}>
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
          handleClick={onListClick}
          months={MONTHS}
          years={years}
          handleIncrementYear={handleIncrementYear}
          handleDecrementYear={handleDecrementYear}
          pickedYear={year}
          pickedMonth={month}
        />
      )}
    </div>
  );
}

export default GetCurrentMonth;
