import Select from '../Select';

import styles from '../Controls/Controls.module.scss';
import { ReactComponent as Calculator } from '../../icons/calculator.svg';

export default function Controls() {
  return (
    <div className={styles.controls__container}>
      <div className={styles.inputs__date__thumb}>
        <button className={styles.arrow} type="button">
          Стрелка
        </button>
        <div className={styles.inputs__container}>
          <input
            type="text"
            placeholder="Описание товара"
            className={styles.input__item}
          />

          <Select />

          <div className={styles.input__sum__thumb}>
            <input
              type="text"
              placeholder="0,00"
              className={styles.input__sum}
            />
            <div className={styles.icon__mobile_calculator_container}>
              <Calculator className={styles.icon__mobile_calculator} />
            </div>
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
    </div>
  );
}
