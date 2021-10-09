import React from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import styles from './styles/App.module.scss';

export default function App() {
  let loggedIn = false;
  return (
    <div className={loggedIn ? styles.loggedInBg : styles.loggedOutBg}>
      {/* <RegisterPage /> */}
      <LoginPage />
    </div>
  );
}
