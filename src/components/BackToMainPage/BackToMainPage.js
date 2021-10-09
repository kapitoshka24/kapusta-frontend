import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BackToMainPage.module.scss';
import { ReactComponent as GoHomeIcon } from '../../icons/go-home.svg';
import useWindowWidth from '../../helpers/useWindowWidth';

function BackToMainPage({ closeModal }) {
  const windowWidth = useWindowWidth();

  return (
    <Link to="/home" className={styles.Link} onClick={closeModal}>
      <GoHomeIcon width="18" height="12" className={styles.GoHomeIcon} />
      {windowWidth >= 768 && (
        <span className={styles.TextLink}>Вернуться на главную</span>
      )}
    </Link>
  );
}

export default BackToMainPage;
