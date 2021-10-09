import React from 'react';
import Header from '../components/Header';
import TotalBalance from '../components/TotalBalance';
import Expense from '../components/Expense';

export default function ExpenceIncomePage() {
  return (
    <>
      <Header />
      <TotalBalance />
      <Expense />
    </>
  );
}
