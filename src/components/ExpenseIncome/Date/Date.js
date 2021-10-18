import { ReactComponent as Calendar } from '../../../images/calendar.svg';

import { forwardRef, useState, useEffect } from 'react';
import styles from './Date.module.scss';
import DatePicker, { registerLocale } from 'react-datepicker';

import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import './Date.css';

registerLocale('ru', ru);

export default function DateComponent({ setDate }) {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      id="datePicker"
      className={styles.DatePicker}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  useEffect(() => {
    setDate(
      `${
        startDate.getFullYear() +
        '-' +
        ('0' + (startDate.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + startDate.getDate()).slice(-2)
      }`,
    );
  }, [startDate, setDate]);

  return (
    <>
      <label htmlFor="datePicker" className={styles.lableCursor}>
        <Calendar className={styles.icon__calendar} />
      </label>

      <DatePicker
        customInput={<ExampleCustomInput />}
        locale="ru"
        minDate={new Date('01-01-2021')}
        maxDate={new Date()}
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
      />
    </>
  );
}
