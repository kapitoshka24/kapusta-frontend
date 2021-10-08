import React from 'react';
import TotalBalance from './components/TotalBalance';
import Header from './components/Header';
import Chart from './components/Chart';

import MainComponent from './components/MainComponent/MainComponent';

export default function App() {
  return (
    <>
      <MainComponent />
      <Header />
      <TotalBalance />
      <Chart />
    </>
  );
}
