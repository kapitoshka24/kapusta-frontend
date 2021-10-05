import styles from './LogoutModal.module.scss';

const LogoutModal = ({ massage }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modalContainer}>
        <p className={styles.massage}>{massage}</p>
        <button type="button">Да</button>
        <button type="button">Нет</button>
      </div>
    </div>
  );
};

export default LogoutModal;
