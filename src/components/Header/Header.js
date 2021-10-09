import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import LogoutModal from '../LogoutModal';

import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as Logout } from './icons/logout.svg';

import styles from './Header.module.scss';

export default function Header() {
  const loggedIn = true;
  const user = 'User Name';

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevVal => !prevVal);
  };

  return (
    <>
      <div
        className={
          loggedIn ? styles.backgroundLoggedIn : styles.backgroundLoggedOut
        }
      >
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Link to="/">
              <Logo />
            </Link>
            {loggedIn && (
              <div className={styles.user__menu}>
                <button className={styles.user__button}>{user[0]}</button>
                <button onClick={toggleModal} className={styles.logout__mobile}>
                  <Logout />
                </button>
                <span className={styles.user__name}>{user}</span>
                <a onClick={toggleModal} className={styles.logout}>
                  Выйти
                </a>
              </div>
            )}
          </header>
        </div>
        {showModal && (
          <LogoutModal
            closeModal={toggleModal}
            massage={'Вы действительно хотите выйти?'}
          />
        )}
      </div>
    </>
  );
}
