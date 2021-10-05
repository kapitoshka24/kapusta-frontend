import Select from '../Select';

<<<<<<< HEAD
import Date from '../Date';
import styles from './Controls.module.scss';
import { ReactComponent as Calculator } from '../../icons/calculator.svg';

export default function Controls({ closeControls }) {
  const mobile = window.screen.width < 768;

||||||| parent of f902ba7 ([Expense] Add dropdown & tabs components)
export default function Controls() {
=======
import styles from './Controls.module.scss';
import { ReactComponent as Calendar } from '../../icons/calendar.svg';
import { ReactComponent as Calculator } from '../../icons/calculator.svg';

export default function Controls() {
>>>>>>> f902ba7 ([Expense] Add dropdown & tabs components)
  return (
<<<<<<< HEAD
    <div className={styles.controls__container}>
      <div className={styles.inputs__date__thumb}>
        {!mobile && <Date />}

        <button className={styles.arrow} onClick={closeControls} type="button">
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
            <Calculator className={styles.icon__calculator} />
            <div className={styles.icon__mobile_calculator_container}>
              <Calculator className={styles.icon__mobile_calculator} />
            </div>
          </div>
        </div>
      </div>
||||||| parent of f902ba7 ([Expense] Add dropdown & tabs components)
    <div className={styles.input__container}>
      <span className={styles.date}>21.11.2019</span>
      <input
        type="text"
        placeholder="Описание товара"
        className={styles.input__item}
      />
      <Select />
      <input type="text" placeholder="0,00" className={styles.input__sum} />
=======
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
>>>>>>> f902ba7 ([Expense] Add dropdown & tabs components)

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
