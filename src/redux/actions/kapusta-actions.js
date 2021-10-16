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

  getSumCategoryRequest: createAction('kapusta/sumCategoryRequest'),
  getSumCategorySuccess: createAction('kapusta/sumCategorySuccess'),
  getSumCategoryError: createAction('kapusta/sumCategoryError'),

  incrementReportYear: createAction('kapusta/incrementReportYear'),
  decrementReportYear: createAction('kapusta/decrementReportYear'),
  changeReportMonth: createAction('kapusta/changeReportMonth'),
  incrementReportMonth: createAction('kapusta/incrementReportMonth'),
  decrementReportMonth: createAction('kapusta/decrementReportMonth'),
  changeReportYears: createAction('kapusta/changeReportYears'),
};

export default actions;
