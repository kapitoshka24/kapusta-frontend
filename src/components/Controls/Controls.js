import Select from '../Select';

import Date from '../Date';
// import BackToMainPage from '../report/BackToMainPage';
import styles from './Controls.module.scss';
import { ReactComponent as Calculator } from '../../icons/calculator.svg';

export default function Controls({ closeControls }) {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeControls();
    }
  };

  const mobile = window.screen.width < 768;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.controls__container}>
        <div className={styles.inputs__date__thumb}>
          {!mobile && <Date />}

          <button
            className={styles.arrow}
            onClick={closeControls}
            type="button"
          >
            Стрелка
          </button>
          {/* <BackToMainPage onClick={closeControls} /> */}
          <form className={styles.inputs__container}>
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
          </form>
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
    </div>
  );
}
