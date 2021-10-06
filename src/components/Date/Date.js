import styles from './Date.module.scss';
import { ReactComponent as Calendar } from '../../icons/calendar.svg';

export default function Date() {
  return (
    <div className={styles.date__container}>
      <Calendar className={styles.icon__calendar} />
      <span className={styles.date}>21.11.2019</span>
    </div>
  );
}
