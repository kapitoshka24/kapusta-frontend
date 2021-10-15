import { createAction } from '@reduxjs/toolkit';

// const changeTotalBalance = createAction('ckapusta/changeTotalBalance');

const totalBalanceRequest = createAction('ckapusta/totalBalanceRequest');
const totalBalanceSuccess = createAction('ckapusta/totalBalanceSuccess');
const totalBalanceError = createAction('ckapusta/totalBalanceError');

const addTotalBalanceRequest = createAction('ckapusta/addTotalBalanceRequest');
const addTotalBalanceSuccess = createAction('ckapusta/addTotalBalanceSuccess');
const addTotalBalanceError = createAction('ckapusta/addTotalBalanceError');

const incrementReportYear = createAction('kapusta/incrementReportYear');
const decrementReportYear = createAction('kapusta/decrementReportYear');
const changeReportMonth = createAction('kapusta/changeReportMonth');
const incrementReportMonth = createAction('kapusta/incrementReportMonth');
const decrementReportMonth = createAction('kapusta/decrementReportMonth');
const changeReportYears = createAction('kapusta/changeReportYears');

const actions = {
  //   changeTotalBalance,
  totalBalanceRequest,
  totalBalanceSuccess,
  totalBalanceError,
  addTotalBalanceRequest,
  addTotalBalanceSuccess,
  addTotalBalanceError,
  incrementReportYear,
  decrementReportYear,
  changeReportMonth,
  incrementReportMonth,
  decrementReportMonth,
  changeReportYears,
};
export default actions;
