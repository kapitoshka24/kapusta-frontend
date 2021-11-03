import { createAction } from '@reduxjs/toolkit';

const actions = {
  fetchMonthlySummaryRequest: createAction(
    'kapusta/fetchMonthlySummaryRequest',
  ),
  fetchMonthlySummarySuccess: createAction(
    'kapusta/fetchMonthlySummarySuccess',
  ),
  fetchMonthlySummaryError: createAction('kapusta/fetchMonthlySummaryError'),

  fetchMonthlySummaryIncomeRequest: createAction(
    'kapusta/fetchMonthlySummaryIncomeRequest',
  ),
  fetchMonthlySummaryIncomeSuccess: createAction(
    'kapusta/fetchMonthlySummaryIncomeSuccess',
  ),
  fetchMonthlySummaryIncomeError: createAction(
    'kapusta/fetchMonthlySummaryIncomeError',
  ),

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

  fetchExpenseRequest: createAction('kapusta/fetchExpenseRequest'),
  fetchExpenseSuccess: createAction('kapusta/fetchExpenseSuccess'),
  fetchExpenseError: createAction('kapusta/fetchExpenseError'),

  addExpenseRequest: createAction('kapusta/addExpenseRequest'),
  addExpenseSuccess: createAction('kapusta/addExpenseSuccess'),
  addExpenseError: createAction('kapusta/addExpenseError'),

  deleteExpenseRequest: createAction('kapusta/deleteExpenseRequest'),
  deleteExpenseSuccess: createAction('kapusta/deleteExpenseSuccess'),
  deleteExpenseError: createAction('kapusta/deleteExpenseError'),

  fetchIncomeRequest: createAction('kapusta/fetchIncomeRequest'),
  fetchIncomeSuccess: createAction('kapusta/fetchIncomeSuccess'),
  fetchIncomeError: createAction('kapusta/fetchIncomeError'),

  addIncomeRequest: createAction('kapusta/addIncomeRequest'),
  addIncomeSuccess: createAction('kapusta/addIncomeSuccess'),
  addIncomeError: createAction('kapusta/addIncomeError'),

  deleteIncomeRequest: createAction('kapusta/deleteIncomeRequest'),
  deleteIncomeSuccess: createAction('kapusta/deleteIncomeSuccess'),
  deleteIncomeError: createAction('kapusta/deleteIncomeError'),

  fetchAdjustmentsRequest: createAction('kapusta/fetchAdjustmentsRequest'),
  fetchAdjustmentsSuccess: createAction('kapusta/fetchAdjustmentsSuccess'),
  fetchAdjustmentsError: createAction('kapusta/fetchAdjustmentsError'),

  addAdjustmentsRequest: createAction('kapusta/addAdjustmentsRequest'),
  addAdjustmentsSuccess: createAction('kapusta/addAdjustmentsSuccess'),
  addAdjustmentsError: createAction('kapusta/addAdjustmentsError'),

  deleteAdjustmentsRequest: createAction('kapusta/deleteAdjustmentsRequest'),
  deleteAdjustmentsSuccess: createAction('kapusta/deleteAdjustmentsSuccess'),
  deleteAdjustmentsError: createAction('kapusta/deleteAdjustmentsError'),

  fetchExpensesChartDataRequest: createAction(
    'kapusta/fetchExpensesChartDataRequest',
  ),
  fetchExpensesChartDataSuccess: createAction(
    'kapusta/fetchExpensesChartDataSuccess',
  ),
  fetchExpensesChartDataError: createAction(
    'kapusta/fetchExpensesChartDataError',
  ),

  fetchIncomeChartDataRequest: createAction(
    'kapusta/fetchIncomeChartDataRequest',
  ),
  fetchIncomeChartDataSuccess: createAction(
    'kapusta/fetchIncomeChartDataSuccess',
  ),
  fetchIncomeChartDataError: createAction('kapusta/fetchIncomeChartDataError'),
};

export default actions;
