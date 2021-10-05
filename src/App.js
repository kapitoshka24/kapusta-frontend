import React from 'react';
import TotalBalance from './components/TotalBalance';
import Header from './components/Header';
import Turnover from './components/turnover/Turnover';
import Expenses from './components/expenses/Expenses';
import TurnoverSlider from './components/turnover-slider/TurnoverSlider';

export default function App() {
  return (
    <>
      <Header />
      <TotalBalance />

      <Turnover />
      <TurnoverSlider />
      <Expenses />
    </>
  );
}
