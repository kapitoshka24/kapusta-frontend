import React from 'react';
import ReportBalance from '../components/Report/ReportBalance';
import Turnover from '../components/Report/Turnover';
import TurnoverSlider from '../components/Report/TurnoverSlider';
import Chart from '../components/Report/Chart';

export default function ReportPage() {
  return (
    <>
      <ReportBalance />
      <Turnover />
      <TurnoverSlider />
      <Chart />
    </>
  );
}
