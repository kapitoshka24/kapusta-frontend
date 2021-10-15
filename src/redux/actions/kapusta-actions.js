import { createAction } from '@reduxjs/toolkit';

// const changeTotalBalance = createAction('kapusta/changeTotalBalance');

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

const getSumCategoryRequest = createAction('kapusta/sumCategoryRequest');
const getSumCategorySuccess = createAction('kapusta/sumCategorySuccess');
const getSumCategoryError = createAction('kapusta/sumCategoryError');

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
  getSumCategoryRequest,
  getSumCategorySuccess,
  getSumCategoryError,
  fetchMonthlySummaryRequest,
  fetchMonthlySummarySuccess,
  fetchMonthlySummaryError,
};

export default actions;
