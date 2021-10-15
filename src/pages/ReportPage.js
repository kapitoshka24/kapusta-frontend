import React from 'react';
import Header from '../components/Header';
import ReportBalance from '../components/Report/ReportBalance';
import Turnover from '../components/Report/Turnover';
import TurnoverSlider from '../components/Report/TurnoverSlider';
import Chart from '../components/ExpenseIncome/Chart';
import styles from '../styles/AppReport.module.scss';

export default function ReportPage() {
  let loggedIn = true;
  return (
    <div className={loggedIn ? styles.loggedInBg : styles.loggedOutBg}>
      <Header />
      <ReportBalance />
      <Turnover />
      <TurnoverSlider />
      <Chart />
    </div>
  );
}
