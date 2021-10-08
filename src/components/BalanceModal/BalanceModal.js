import styles from './balanceModal.module.scss';

const BalanceModal = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.triangle}></div>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={styles.content}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
      </div>
    </div>
  );
};

export default BalanceModal;
