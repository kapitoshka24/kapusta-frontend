import React from 'react';
import Turnover from './components/turnover/Turnover';
import TurnoverSlider from './components/turnover-slider/TurnoverSlider';
import TurnoverWrapper from './components/turnover-wrapper/TurnoverWrapper';

export default function App() {
  return (
    <>
      {/* <Turnover /> */}

      <TurnoverSlider />
      <TurnoverWrapper>
        <TurnoverSlider />
      </TurnoverWrapper>
    </>
  );
}
