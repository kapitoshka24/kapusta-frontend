import React, { useEffect } from 'react';
import styles from './LogoutModal.module.scss';
// import closeButton from '../../images/close.svg';

const LogoutModal = ({ massage, closeModal }) => {
  useEffect(() => {
    const handleKeyDownEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDownEsc);
    return () => {
      window.removeEventListener('keydown', handleKeyDownEsc);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div onClick={handleBackdropClick} className={styles.backdrop}>
      <div className={styles.modalContainer}>
        <p className={styles.massage}>{massage}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} type="button">
            Да
          </button>
          <button onClick={closeModal} className={styles.button} type="button">
            Нет
          </button>
        </div>
        <button
          onClick={closeModal}
          className={styles.closeButton}
          type="button"
        ></button>
      </div>
    </div>
  );
};

export default LogoutModal;
