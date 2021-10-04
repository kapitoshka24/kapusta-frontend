import React from 'react';
import TotalBalance from './components/TotalBalance';
import Header from './components/Header';
import Turnover from './components/turnover/Turnover';

export default function App() {
  return (
    <>
      <Header />
      <TotalBalance />
      <Turnover />
    </>
  );
}
