import { useState } from 'react';

import styles from './Tabs.module.scss';

export default function Tabs() {
  const [isActive, setActive] = useState([true, false]);

  const toggleClass = e => {
    e.target.id === '0' ? setActive([true, false]) : setActive([false, true]);
  };

  return (
    <div className={styles.button__container}>
      <button
        type="button"
        id="0"
        className={
          isActive[0]
            ? [styles.button, styles.button__active].join(' ')
            : styles.button
        }
        onClick={toggleClass}
      >
        Расход
      </button>
      <button
        type="button"
        id="1"
        className={
          isActive[1]
            ? [styles.button, styles.button__active].join(' ')
            : styles.button
        }
        onClick={toggleClass}
      >
        Доход
      </button>
    </div>
  );
}
