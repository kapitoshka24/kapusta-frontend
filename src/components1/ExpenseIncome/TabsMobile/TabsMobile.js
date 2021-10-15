import { useState } from 'react';

import styles from '../Tabs/Tabs.module.scss';

export default function TabsMobile({ showButton }) {
  const [isActive, setActive] = useState([false, false]);

  const toggleClass = e => {
    e.target.id === '0' ? setActive([true, false]) : setActive([false, true]);
  };

  return (
    <div className={styles.button__container}>
      <button
        id="0"
        type="button"
        className={
          isActive[0]
            ? [styles.button, styles.button__active].join(' ')
            : styles.button
        }
        onClick={e => {
          showButton();
          toggleClass(e);
        }}
      >
        Расход
      </button>
      <button
        id="1"
        type="button"
        className={
          isActive[1]
            ? [styles.button, styles.button__active].join(' ')
            : styles.button
        }
        onClick={e => {
          showButton();
          toggleClass(e);
        }}
      >
        Доход
      </button>
    </div>
  );
}
