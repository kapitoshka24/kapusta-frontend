import Select from '../Select';

import Date from '../Date';
import BackToMainPage from '../../BackToMainPage';
import styles from '../Controls/Controls.module.scss';
import { ReactComponent as Calculator } from '../../../images/calculator.svg';
import useWindowDementions from '../../../helpers/useWindowDementions';

export default function ControlsMobile({ closeControls }) {
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
          {width >= 768 && <Date />}

          <BackToMainPage closeModal={closeControls} />

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
