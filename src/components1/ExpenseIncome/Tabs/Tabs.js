// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Tabs.module.scss';

export default function Tabs() {
  // const [isActive, setActive] = useState([true, false]);

  // const toggleClass = e => {
  //   e.target.id === '0' ? setActive([true, false]) : setActive([false, true]);
  // };

  return (
    <div className={styles.button__container}>
      <NavLink
        type="button"
        exact
        to={'/main-page'}
        // id="0"
        // className={
        //   isActive[0]
        //     ? [styles.button, styles.button__active].join(' ')
        //     : styles.button
        // }
        className={styles.button}
        activeClassName={`${styles.button} ${styles.button__active}`}
        // onClick={toggleClass}
      >
        Расход
      </NavLink>
      <NavLink
        type="button"
        to={'/main-page/incomes'}
        // id="1"
        // className={
        //   isActive[1]
        //     ? [styles.button, styles.button__active].join(' ')
        //     : styles.button
        // }
        className={styles.button}
        activeClassName={`${styles.button} ${styles.button__active}`}
        // onClick={toggleClass}
      >
        Доход
      </NavLink>
      <NavLink
        type="button"
        to={'/main-page/adjustments'}
        // id="2"
        // className={
        //   isActive[1]
        //     ? [styles.button, styles.button__active].join(' ')
        //     : styles.button
        // }
        className={styles.button}
        activeClassName={`${styles.button} ${styles.button__active}`}
        // onClick={toggleClass}
      >
        Корректировка
      </NavLink>
    </div>
  );
}
