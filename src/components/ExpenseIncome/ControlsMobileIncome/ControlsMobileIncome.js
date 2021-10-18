import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Select from '../Select';

import DateComponent from '../Date';
import BackToMainPage from '../../BackToMainPage';
import styles from '../Controls/Controls.module.scss';
import { ReactComponent as Calculator } from '../../../images/calculator.svg';
import useWindowDementions from '../../../helpers/useWindowDementions';
import { kapustaOperations } from '../../../redux/operations';
import {
  inputChangeHandler,
  inputBlurHandler,
} from '../../../helpers/priceInputParser';

const options = [
  { value: 'salary', label: 'ЗП' },
  { value: 'otherIncome', label: 'Доп. доход' },
];

export default function ControlsMobile({ closeControls }) {
  const [income, setIncome] = useState({
    name: '',
    sum: '',
  });

  const [category, setCategory] = useState({ category: '' });

  const { name, sum } = income;

  const dispatch = useDispatch();

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    setIncome(prevIncome => ({
      ...prevIncome,
      [name]: value,
    }));
  }, []);

  const handlePriceChange = e => {
    setIncome(prevExpense => ({
      ...prevExpense,
      [e.target.name]: inputChangeHandler(e.target.value),
    }));
  };

  const handlePriceBlur = e => {
    setIncome(prevExpense => ({
      ...prevExpense,
      [e.target.name]: inputBlurHandler(e.target.value),
    }));
  };

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      const data = {
        date: new Date(),
        name,
        sum,
        category,
      };

      await dispatch(kapustaOperations.addIncome(data));
      await dispatch(kapustaOperations.fetchTotalBalance());
      e.target.reset();
      resetForm();
    },
    [dispatch, name, sum, category],
  );

  const handleReset = () => {
    resetForm();
  };

  const resetForm = () => {
    setIncome({ name: '', sum: '' });
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeControls();
    }
  };

  const { width } = useWindowDementions();

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.controls__container}>
        <div className={styles.inputs__date__thumb}>
          {width >= 768 && <DateComponent />}

          <BackToMainPage closeModal={closeControls} />

          <form
            className={styles.inputs__container}
            id="form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Описание товара"
              className={styles.input__item}
              onChange={handleChange}
            />

            <Select setCategory={setCategory} options={options} />

            <div className={styles.input__sum__thumb}>
              <input
                name="sum"
                placeholder="0.00"
                // pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
                title="Значение должно состоять из цифр и может иметь точку"
                className={styles.input__sum}
                onBlur={handlePriceBlur}
                onChange={handlePriceChange}
                value={sum}
              />
              <Calculator className={styles.icon__calculator} />
              <div className={styles.icon__mobile_calculator_container}>
                <Calculator className={styles.icon__mobile_calculator} />
              </div>
            </div>
          </form>
        </div>

        <div className={styles.buttons__container}>
          <button form="form" type="submit" className={styles.button__submit}>
            Ввод
          </button>
          <button
            type="reset"
            className={styles.button__reset}
            form="form"
            onClick={handleReset}
          >
            Очистить
          </button>
        </div>
      </div>
    </div>
  );
}
