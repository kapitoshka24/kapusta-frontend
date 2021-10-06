import styles from './LogoutModal.module.scss';
import closeButton from '../../images/close.svg';

const LogoutModal = ({ massage }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modalContainer}>
        <p className={styles.massage}>{massage}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} type="button">
            Да
          </button>
          <button className={styles.button} type="button">
            Нет
          </button>
        </div>
        <button className={styles.closeButton} type="button"></button>
      </div>
    </div>
  );
};

export default LogoutModal;
