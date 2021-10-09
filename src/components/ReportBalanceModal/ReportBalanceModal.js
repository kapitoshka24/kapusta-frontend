import styles from './ReportBalanceModal.module.scss';

export default function ReportBalanceModal() {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.triangle}></div>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={styles.content}>
          Ты не можешь тратить деньги, пока их у тебя нет :)
        </p>
      </div>
    </div>
  );
}
