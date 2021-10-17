import React from 'react';
// import Header from '../components/Header';
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
  // const location = useLocation();
  // useEffect(
  //   () => localStorage.setItem('pathname', location.pathname),
  //   [location],
  // );

  return (
    // <div className={styles.loggedInBg}>
    // {/* <Header /> */ }
    <>
      <ReportBalance />
      <Turnover />
      <TurnoverSlider />
      {/* <Chart /> */}
    </>
    // </div>
  );
}
