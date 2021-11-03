import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { kapustaActions } from '../actions';

const totalBalance = createReducer('', {
  [kapustaActions.totalBalanceSuccess]: (_, { payload }) =>
    payload.data.balance,
  [kapustaActions.addTotalBalanceSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [kapustaActions.addTotalBalanceSuccess]: () => true,
  [kapustaActions.addTotalBalanceRequest]: () => false,
  [kapustaActions.addTotalBalanceError]: () => false,
  [kapustaActions.totalBalanceSuccess]: () => true,
  [kapustaActions.totalBalanceRequest]: () => false,
  [kapustaActions.totalBalanceError]: () => false,
});

const reportYear = createReducer(new Date().getFullYear(), {
  [kapustaActions.incrementReportYear]: (state, _action) => state + 1,
  [kapustaActions.decrementReportYear]: (state, _action) => state - 1,
});

const reportMonth = createReducer(new Date().getMonth(), {
  [kapustaActions.changeReportMonth]: (_state, { payload }) => payload,
  [kapustaActions.incrementReportMonth]: (state, _action) => state + 1,
  [kapustaActions.decrementReportMonth]: (state, _action) => state - 1,
});

const reportYears = createReducer([], {
  [kapustaActions.changeReportYears]: (_state, { payload }) => payload,
});

const reportSummary = createReducer(
  {},
  {
    [kapustaActions.getSumCategorySuccess]: (_, { payload }) => payload.summary,
  },
);

const totalIncome = createReducer('', {
  [kapustaActions.getSumCategorySuccess]: (_, { payload }) =>
    payload.totalIncome,
});

const totalExpenses = createReducer('', {
  [kapustaActions.getSumCategorySuccess]: (_, { payload }) =>
    payload.totalExpenses,
});

const monthlySummary = createReducer([], {
  [kapustaActions.fetchMonthlySummarySuccess]: (_, { payload }) => payload,
});

const monthlySummaryIncome = createReducer([], {
  [kapustaActions.fetchMonthlySummaryIncomeSuccess]: (_, { payload }) =>
    payload,
});

const error = createReducer(null, {
  [kapustaActions.fetchMonthlySummaryError]: (_, { payload }) => payload,
  [kapustaActions.fetchExpenseError]: (_, { payload }) => payload,
  [kapustaActions.fetchIncomeChartDataError]: (_, { payload }) => payload,
  [kapustaActions.fetchAdjustmentsError]: (_, { payload }) => payload,
  [kapustaActions.fetchExpensesChartDataError]: (_, { payload }) => payload,
  [kapustaActions.fetchMonthlySummaryError]: (_, { payload }) => payload,
  [kapustaActions.fetchIncomeError]: (_, { payload }) => payload,
  [kapustaActions.totalBalanceError]: (_, { payload }) => payload,
  [kapustaActions.addAdjustmentsError]: (_, { payload }) => payload,
  [kapustaActions.addExpenseError]: (_, { payload }) => payload,
  [kapustaActions.addIncomeError]: (_, { payload }) => payload,
  [kapustaActions.addTotalBalanceError]: (_, { payload }) => payload,
  [kapustaActions.deleteAdjustmentsError]: (_, { payload }) => payload,
  [kapustaActions.deleteExpenseError]: (_, { payload }) => payload,
  [kapustaActions.deleteIncomeError]: (_, { payload }) => payload,
});

const expensesChartData = createReducer([], {
  [kapustaActions.fetchExpensesChartDataSuccess]: (_state, { payload }) =>
    payload,
});
const incomeChartData = createReducer([], {
  [kapustaActions.fetchIncomeChartDataSuccess]: (_state, { payload }) =>
    payload,
});

const expense = createReducer([], {
  [kapustaActions.fetchExpenseSuccess]: (_, { payload }) => payload,
  [kapustaActions.addExpenseSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [kapustaActions.deleteExpenseSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const income = createReducer([], {
  [kapustaActions.fetchIncomeSuccess]: (_, { payload }) => payload,
  [kapustaActions.addIncomeSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [kapustaActions.deleteIncomeSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const adjustments = createReducer([], {
  [kapustaActions.fetchAdjustmentsSuccess]: (_, { payload }) => payload,
  [kapustaActions.deleteAdjustmentsSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

export default combineReducers({
  loading,
  totalBalance,
  expense,
  income,
  adjustments,
  reportYear,
  reportMonth,
  reportYears,
  reportSummary,
  monthlySummary,
  monthlySummaryIncome,
  error,
  totalIncome,
  totalExpenses,
  expensesChartData,
  incomeChartData,
});
