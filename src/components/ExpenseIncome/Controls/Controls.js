import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Select from '../Select';

import DateComponent from '../Date';
import styles from './Controls.module.scss';
import { ReactComponent as Calculator } from '../../../images/calculator.svg';
import useWindowDementions from '../../../helpers/useWindowDementions';
import { kapustaOperations } from '../../../redux/operations';
import { enterError, enterSum } from '../../../services/pnotify';

import {
  inputChangeHandler,
  inputBlurHandler,
} from '../../../helpers/priceInputParser';

const options = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'housing', label: 'Всё для дома' },
  { value: 'technique', label: 'Техника' },
  { value: 'utilityCommunication', label: 'Коммуналка, связь' },
  { value: 'sportsHobbies', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

export default function Controls() {
  const [expense, setExpense] = useState({
    name: '',
    sum: '',
  });

  const [category, setCategory] = useState({ category: '' });
  const [date, setDate] = useState({ date: '' });

  const { name, sum } = expense;

  const dispatch = useDispatch();

  const handlePriceChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    const val = inputChangeHandler(value);

    setExpense(prevExpense => ({
      ...prevExpense,
      [name]: val,
    }));
  }, []);

  const handlePriceBlur = e => {
    const { name, value } = e.target;

    const val = inputBlurHandler(value);

    setExpense(prevExpense => ({
      ...prevExpense,
      [name]: val,
    }));
  };

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    setExpense(prevExpense => ({
      ...prevExpense,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const data = {
        date,
        name,
        sum,
        category,
      };

      if (name === '' || sum === '' || category === undefined) {
        enterError();
        return;
      }

      if (+sum > 999999999) {
        enterSum();
        return;
      }

      dispatch(kapustaOperations.addExpense(data));
      dispatch(kapustaOperations.fetchTotalBalance());
      dispatch(kapustaOperations.fetchMonthlySummary());
      resetForm();
    },
    [dispatch, name, sum, category, date],
  );

  const handleReset = () => {
    resetForm();
  };

  const resetForm = () => {
    setExpense({ name: '', sum: '' });
  };

  const { width } = useWindowDementions();

  return (
    <div className={styles.controls__container}>
      <div className={styles.date__container}>
        {width >= 768 && <DateComponent setDate={setDate} />}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs__container}>
          <input
            type="text"
            name="name"
            placeholder="Описание товара"
            className={styles.input__item}
            autoComplete="off"
            onChange={handleChange}
            value={name}
          />

          <Select setCategory={setCategory} options={options} />

          <div className={styles.input__sum__thumb}>
            <input
              name="sum"
              placeholder="0.00"
              pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
              title="Значение должно состоять из цифр и может иметь точку"
              className={styles.input__sum}
              onChange={handlePriceChange}
              onBlur={handlePriceBlur}
              autoComplete="off"
              value={sum}
            />
            <Calculator className={styles.icon__calculator} />
            <div className={styles.icon__mobile_calculator_container}>
              <Calculator className={styles.icon__mobile_calculator} />
            </div>
          </div>
        </div>

        <div className={styles.buttons__container}>
          <button type="submit" className={styles.button__submit}>
            Ввод
          </button>
          <button
            type="reset"
            className={styles.button__reset}
            onClick={handleReset}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}
