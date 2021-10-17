import React, { useEffect, useRef } from 'react';
import styles from './ReportBalanceModal.module.scss';

export default function ReportBalanceModal({ closeModal }) {
  const modalContainer = useRef();

  useEffect(() => {
    const handleCloseModal = e => {
      if (!modalContainer.current) {
        return;
      }
      if (modalContainer.current.contains(e.target)) {
        return;
      }
      closeModal();
    };
    window.addEventListener('click', handleCloseModal);

    return () => {
      window.removeEventListener('click', handleCloseModal);
    };
  }, [closeModal]);
  return (
    <div className={styles.modalContainer} ref={modalContainer}>
      <div className={styles.triangle}></div>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={styles.content}>
          {`Ты не можешь тратить деньги, пока их у тебя нет :)`}
        </p>
      </div>
    </div>
  );
}
