import styles from './BalanceModal.module.scss';
import { ReactComponent as CloseIcon } from '../../../images/close.svg';

const BalanceModal = ({ closeModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.triangle}></div>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={styles.content}>
          {`Ты не можешь тратить деньги, пока их у тебя нет :)`}
        </p>
        <CloseIcon onClick={closeModal} className={styles.closeButton} />
      </div>
    </div>
  );
};

export default BalanceModal;
