import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import LogoutModal from '../LogoutModal';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/selectors';

import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as Logout } from './icons/logout.svg';
import defaultAvatar from './icons/user.png';

import styles from './Header.module.scss';

export default function Header({ notFound }) {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);
  const user = useSelector(authSelectors.getUsername);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = e => {
    e.preventDefault();
    setShowModal(prevVal => !prevVal);
  };

  const className = notFound
    ? styles.backgroundNotFound
    : loggedIn
    ? styles.backgroundLoggedIn
    : styles.backgroundLoggedOut;
  return (
    <>
      <div className={className}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Link to="/main-page">
              <Logo />
            </Link>
            {loggedIn && (
              <div className={styles.user__menu}>
                <img
                  src={defaultAvatar}
                  alt="user avatar"
                  className={styles.user__avatar}
                />

                <button onClick={toggleModal} className={styles.logout__mobile}>
                  <Logout />
                </button>
                <span className={styles.user__name}>{user}</span>
                <a href="/" onClick={toggleModal} className={styles.logout}>
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
