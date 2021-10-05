import React from 'react';
import Turnover from './components/turnover/Turnover';
import Expenses from './components/expenses/Expenses';
import TurnoverSlider from './components/turnover-slider/TurnoverSlider';

export default function App() {
  return (
    <>
      <Turnover />
      <TurnoverSlider />
      <Expenses />
    </>
  );
}
