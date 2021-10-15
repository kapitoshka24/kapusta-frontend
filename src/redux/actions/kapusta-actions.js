import { createAction } from '@reduxjs/toolkit';

const fetchMonthlySummaryRequest = createAction(
  'kapusta/fetchMonthlySummaryRequest',
);
const fetchMonthlySummarySuccess = createAction(
  'kapusta/fetchMonthlySummarySuccess',
);
const fetchMonthlySummaryError = createAction(
  'kapusta/fetchMonthlySummaryError',
);

const totalBalanceRequest = createAction('kapusta/totalBalanceRequest');
const totalBalanceSuccess = createAction('kapusta/totalBalanceSuccess');
const totalBalanceError = createAction('kapusta/totalBalanceError');

const addTotalBalanceRequest = createAction('kapusta/addTotalBalanceRequest');
const addTotalBalanceSuccess = createAction('kapusta/addTotalBalanceSuccess');
const addTotalBalanceError = createAction('kapusta/addTotalBalanceError');

const incrementReportYear = createAction('kapusta/incrementReportYear');
const decrementReportYear = createAction('kapusta/decrementReportYear');
const changeReportMonth = createAction('kapusta/changeReportMonth');
const incrementReportMonth = createAction('kapusta/incrementReportMonth');
const decrementReportMonth = createAction('kapusta/decrementReportMonth');
const changeReportYears = createAction('kapusta/changeReportYears');

const actions = {
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
  fetchMonthlySummaryRequest,
  fetchMonthlySummarySuccess,
  fetchMonthlySummaryError,
};

export default actions;
