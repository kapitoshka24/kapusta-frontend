import React from 'react';
import TotalBalance from './components/TotalBalance';
import Header from './components/Header';
import Chart from './components/Chart';

export default function App() {
  return (
    <>
      <Header />
      <TotalBalance />
      <Chart />
    </>
  );
}
