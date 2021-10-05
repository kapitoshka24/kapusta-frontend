import styles from './Tabs.module.scss';

export default function Tabs() {
  return (
    <div className={styles.button__container}>
      <button
        type="button"
        className={[styles.button, styles.button__active].join(' ')}
      >
        Расход
      </button>
      <button type="button" className={styles.button}>
        Доход
      </button>
    </div>
  );
}
