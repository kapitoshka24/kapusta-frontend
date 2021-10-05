import React from 'react';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExpenceIncomePage from './pages/ExpenseIncomePage';
import styles from './styles/App.module.scss';

import Expense from './components/Expense';

export default function App() {
  let loggedIn = true;
  return (
    <div className={loggedIn ? styles.loggedInBg : styles.loggedOutBg}>
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <ExpenceIncomePage />
    </div>
  );
}
