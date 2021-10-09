import styles from './EnterButton.module.scss';

export default function EnterButton({ closeControls }) {
  return (
    <button type="button" className={styles.button} onClick={closeControls}>
      Ввести сумму
    </button>
  );
}
