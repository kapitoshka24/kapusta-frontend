import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BackToMainPage.module.scss';
import { ReactComponent as GoHomeIcon } from '../../images/go-home.svg';

function BackToMainPage() {
  return (
    <Link to="/home" className={styles.Link}>
      <GoHomeIcon width="18" height="12" className={styles.GoHomeIcon} />
      <span className={styles.TextLink}>Вернуться на главную</span>
    </Link>
  );
}

export default BackToMainPage;
