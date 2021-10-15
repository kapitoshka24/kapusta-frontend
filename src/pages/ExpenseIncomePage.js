import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import TotalBalance from '../components/ExpenseIncome/TotalBalance';
import Expense from '../components/ExpenseIncome/Expense';
import styles from '../styles/AppComon.module.scss';
import { kapustaOperations } from '../redux/operations';

export default function ExpenceIncomePage() {
  let loggedIn = true;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(kapustaOperations.fetchExpense());
  }, [dispatch]);

  return (
    <div className={loggedIn ? styles.loggedInBg : styles.loggedOutBg}>
      <Header />
      <TotalBalance />
      <Expense />
    </div>
  );
}
