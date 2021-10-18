import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import LogoutModal from '../LogoutModal';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/selectors';

import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as Logout } from './icons/logout.svg';
import defaultAvatar from './icons/user.png';

import styles from './Header.module.scss';

export default function Header() {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUsername);
  const userPicture = useSelector(authSelectors.getUserPicture);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = e => {
    e.preventDefault();
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
            <Link to="/main-page">
              <Logo />
            </Link>
            {loggedIn && (
              <div className={styles.user__menu}>
                <img
                  src={userPicture ? userPicture : defaultAvatar}
                  alt="user avatar"
                  className={styles.user__avatar}
                />

                <button onClick={toggleModal} className={styles.logout__mobile}>
                  <Logout />
                </button>
                <span className={styles.user__name}>{userName}</span>
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
