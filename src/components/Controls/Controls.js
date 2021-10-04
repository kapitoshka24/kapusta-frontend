import styles from './Controls.module.scss';
import Select from '../Select';

export default function Controls() {
  return (
    <div className={styles.input__container}>
      <span className={styles.date}>21.11.2019</span>
      <input
        type="text"
        placeholder="Описание товара"
        className={styles.input__item}
      />
      <Select />
      <input type="text" placeholder="0,00" className={styles.input__sum} />

      <button type="submit" className={styles.button__submit}>
        Ввод
      </button>
      <button type="reset" className={styles.button__reset}>
        Очистить
      </button>
    </div>
  );
}
