import Select from '../Select';

import styles from './Controls.module.scss';
import { ReactComponent as Calendar } from '../../icons/calendar.svg';
import { ReactComponent as Calculator } from '../../icons/calculator.svg';

export default function Controls() {
  return (
    <div className={styles.controls__container}>
      <div className={styles.inputs__container}>
        <Calendar className={styles.icon__calendar} />

        <span className={styles.date}>21.11.2019</span>

        <input
          type="text"
          placeholder="Описание товара"
          className={styles.input__item}
        />

        <Select />

        <div className={styles.input__sum__thumb}>
          <input type="text" placeholder="0,00" className={styles.input__sum} />
          <Calculator className={styles.icon__calculator} />
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
    </div>
  );
}
