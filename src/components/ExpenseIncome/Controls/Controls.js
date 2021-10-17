import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Select from '../Select';

import DateComponent from '../Date';
import styles from './Controls.module.scss';
import { ReactComponent as Calculator } from '../../../images/calculator.svg';
import useWindowDementions from '../../../helpers/useWindowDementions';
import { kapustaOperations } from '../../../redux/operations';

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
      console.log(date);
      const data = {
        date,
        name,
        sum,
        category,
      };

      dispatch(kapustaOperations.addExpense(data));
      resetForm();
    },
    [dispatch, name, sum, category, date],
  );

  const handleReset = () => {
    resetForm();
  };

  const resetForm = () => {
    setExpense({ name: '', sum: '' });
    // setCategory({ category: '' });
    setDate({ date: '' });
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
            onChange={handleChange}
            value={name}
          />

          <Select setCategory={setCategory} options={options} />

          <div className={styles.input__sum__thumb}>
            <input
              type="text"
              name="sum"
              placeholder="0,00"
              pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
              title="Значение должно состоять из цифр и может иметь точку"
              className={styles.input__sum}
              onChange={handleChange}
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
