import { useState, useCallback } from 'react';
import Select from '../Select';

import Date from '../Date';
import styles from './Controls.module.scss';
import { ReactComponent as Calculator } from '../../../images/calculator.svg';
import useWindowDementions from '../../../helpers/useWindowDementions';

export default function Controls() {
  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    console.log(name);
    console.log(value);
  });

  const { width } = useWindowDementions();

  return (
    <div className={styles.controls__container}>
      <div className={styles.date__container}>{width >= 768 && <Date />}</div>

      <form className={styles.form}>
        <div className={styles.inputs__container}>
          <input
            type="text"
            name="name"
            placeholder="Описание товара"
            className={styles.input__item}
            onChange={handleChange}
            // value={name}
          />

          <Select />

          <div className={styles.input__sum__thumb}>
            <input
              type="text"
              name="value"
              placeholder="0,00"
              className={styles.input__sum}
              onChange={handleChange}
              // value={sum}
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
          <button type="reset" className={styles.button__reset}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}
