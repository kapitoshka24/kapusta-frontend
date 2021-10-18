import React from 'react';
import ReportBalance from '../components/Report/ReportBalance';
import Turnover from '../components/Report/Turnover';
import TurnoverSlider from '../components/Report/TurnoverSlider';
// import Chart from '../components/ExpenseIncome/Chart';
// import styles from '../styles/AppCommon.module.scss';
// import { useLocation } from 'react-router';
// import { useEffect } from 'react';
// import localStorage from 'redux-persist/es/storage';
// import storage from 'redux-persist/lib/storage';

export default function ReportPage() {
  return (
    <>
      <ReportBalance />
      <Turnover />
      <TurnoverSlider />
      {/* <Chart /> */}
    </>
  );
}
