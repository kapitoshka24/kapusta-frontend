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
    [kapustaActions.getSumCategorySuccess]: (_, { payload }) => payload,
  },
);

const monthlySummary = createReducer([], {
  [kapustaActions.fetchMonthlySummarySuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [kapustaActions.fetchMonthlySummaryError]: (_, { payload }) =>
    console.log(payload),
});

export default combineReducers({
  loading,
  totalBalance,
  reportYear,
  reportMonth,
  reportYears,
  reportSummary,
  monthlySummary,
  error,
});
