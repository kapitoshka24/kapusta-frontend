import { createAction } from '@reduxjs/toolkit';

const changeTotalBalance = createAction('kapusta/changeTotalBalance');

const fetchMonthlySummaryRequest = createAction(
  'kapusta/fetchMonthlySummaryRequest',
);
const fetchMonthlySummarySuccess = createAction(
  'kapusta/fetchMonthlySummarySuccess',
);
const fetchMonthlySummaryError = createAction(
  'kapusta/fetchMonthlySummaryError',
);

const actions = {
  changeTotalBalance,
  fetchMonthlySummaryRequest,
  fetchMonthlySummarySuccess,
  fetchMonthlySummaryError,
};

export default actions;
