import React from 'react';
import TotalBalance from './components/TotalBalance';
import Header from './components/Header';
import Turnover from './components/Turnover/Turnover';

import TurnoverSlider from './components/Turnover-slider/TurnoverSlider';
import TurnoverWrapper from './components/Turnover-wrapper/TurnoverWrapper';

export default function App() {
  return (
    <>
      <Header />
      <TotalBalance />

      <Turnover />
      <TurnoverWrapper>
        <TurnoverSlider />
      </TurnoverWrapper>
    </>
  );
}
