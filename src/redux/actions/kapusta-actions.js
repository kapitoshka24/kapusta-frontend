import { createAction } from '@reduxjs/toolkit';

const actions = {
  fetchMonthlySummaryRequest: createAction(
    'kapusta/fetchMonthlySummaryRequest',
  ),
  fetchMonthlySummarySuccess: createAction(
    'kapusta/fetchMonthlySummarySuccess',
  ),
  fetchMonthlySummaryError: createAction('kapusta/fetchMonthlySummaryError'),

  totalBalanceRequest: createAction('kapusta/totalBalanceRequest'),
  totalBalanceSuccess: createAction('kapusta/totalBalanceSuccess'),
  totalBalanceError: createAction('kapusta/totalBalanceError'),

  addTotalBalanceRequest: createAction('kapusta/addTotalBalanceRequest'),
  addTotalBalanceSuccess: createAction('kapusta/addTotalBalanceSuccess'),
  addTotalBalanceError: createAction('kapusta/addTotalBalanceError'),
};

export default actions;
