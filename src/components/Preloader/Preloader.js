import styles from './preloader.module.scss';
import spiner from '../../icons/spiner.svg';

export default function Preloader() {
  return (
    <div className={styles.backDrop}>
      <div className={styles.preloader}>
        <img className={styles.spiner} src={spiner} alt="spiner" />
      </div>
    </div>
  );
}
