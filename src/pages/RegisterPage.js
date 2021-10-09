import React from 'react';
import Header from '../components/Header';
import Register from '../components/Register/';
import styles from '../styles/AppComon.module.scss';

export default function RegisterPage() {
  let loggedIn = true;
  return (
    <div className={loggedIn ? styles.loggedInBg : styles.loggedOutBg}>
      <Header />
      <Register />
    </div>
  );
}
