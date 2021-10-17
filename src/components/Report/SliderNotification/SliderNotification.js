import styles from './SliderNotification.module.scss';

export default function SliderNotification({ category }) {
  return (
    <div className={styles.wrapper}>
      <p
        className={styles.text}
      >{`У Вас нет ${category} за выбранный месяц`}</p>
    </div>
  );
}
