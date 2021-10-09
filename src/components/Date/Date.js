import styles from './Date.module.scss';
import { ReactComponent as Calendar } from '../../images/calendar.svg';

export default function DateComponent() {
  const getCurrentDay = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div className={styles.date__container}>
      <Calendar className={styles.icon__calendar} />
      <span className={styles.date}>{getCurrentDay()}</span>
    </div>
  );
}
