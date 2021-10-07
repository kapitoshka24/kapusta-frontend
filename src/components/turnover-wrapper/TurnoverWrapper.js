import React from 'react';
import styles from '../turnover-wrapper/TurnoverWrapper.module.scss';
const TurnoverWrapper = ({ children }) => (
  <>{<div className={styles.wrapper}>{children}</div>}</>
);

export default TurnoverWrapper;
