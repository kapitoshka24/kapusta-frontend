import styles from '../Tabs/Tabs.module.scss';

export default function TabsMobile() {
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
