import React from 'react';
import TotalBalance from './components/TotalBalance';
import Header from './components/Header';
import Turnover from './components/turnover/Turnover';

import TurnoverSlider from './components/turnover-slider/TurnoverSlider';
import TurnoverWrapper from './components/turnover-wrapper/TurnoverWrapper';

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
