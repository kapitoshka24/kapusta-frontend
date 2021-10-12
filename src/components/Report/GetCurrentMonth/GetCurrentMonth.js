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

const years = [
  2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
];

function GetCurrentMonth() {
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const [month, setMonth] = useState('Октябрь');

  const handleCalendarOpen = () => {
    setCalendarIsOpen(prevCalendarIsOpen => !prevCalendarIsOpen);
  };

  const onListClick = e => {
    const data = e.target.dataset.name;
    setMonth(data);
    setCalendarIsOpen(false);
  };

  const handleIncrementMonth = () => {
    const currentMonthIndex = MONTHS.findIndex(el => el === month);
    if (currentMonthIndex !== MONTHS.length - 1) {
      setMonth(MONTHS[currentMonthIndex + 1]);
      return;
    }

    if (year === years[years.length - 1]) {
      return;
    }

    setMonth(MONTHS[0]);

    setYear(prevYear => {
      return prevYear === years[years.length - 1] ? prevYear : prevYear + 1;
    });
  };

  const handleDecrementMonth = () => {
    const currentMonthIndex = MONTHS.findIndex(el => el === month);

    if (currentMonthIndex !== 0) {
      setMonth(MONTHS[currentMonthIndex - 1]);
      return;
    }

    if (year === years[0]) {
      return;
    }

    setMonth(MONTHS[MONTHS.length - 1]);

    setYear(prevYear => {
      return prevYear === years[0] ? prevYear : prevYear - 1;
    });
  };

  const [year, setYear] = useState(2021);

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
          {`${month} ${year}`}
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
          currentYear={year}
        />
      )}
    </div>
  );
}

export default GetCurrentMonth;
