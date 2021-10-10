import React from 'react';
import Header from '../components/Header';
import Login from '../components/Home/Login';
import styles from '../styles/AppComon.module.scss';

export default function LoginPage() {
  let loggedIn = true;
  return (
    <div className={loggedIn ? styles.loggedInBg : styles.loggedOutBg}>
      <Header />
      <Login />
    </div>
  );
}
