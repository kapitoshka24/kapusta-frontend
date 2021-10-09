import React from 'react';
import Header from '../components/Header';
import ReportBalance from '../components/ReportBalance';
import Turnover from '../components/Turnover';
import TurnoverSlider from '../components/TurnoverSlider';
import Chart from '../components/Chart';
import styles from '../styles/AppReport.module.scss';

export default function LoginPage() {
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
