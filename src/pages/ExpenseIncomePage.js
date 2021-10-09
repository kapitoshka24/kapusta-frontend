import React from 'react';
import Header from '../components/Header';
import TotalBalance from '../components/ExpenseIncome/TotalBalance';
import Expense from '../components/ExpenseIncome/Expense';
import styles from '../styles/AppComon.module.scss';

export default function ExpenceIncomePage() {
  let loggedIn = true;
  return (
    <div className={loggedIn ? styles.loggedInBg : styles.loggedOutBg}>
      <Header />
      <TotalBalance />
      <Expense />
    </div>
  );
}
