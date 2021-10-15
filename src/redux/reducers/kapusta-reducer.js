import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { kapustaActions } from '../actions';

const totalBalance = createReducer('', {
  [kapustaActions.totalBalanceSuccess]: (_, { payload }) =>
    payload.data.balance,
  [kapustaActions.addTotalBalanceSuccess]: (_, { payload }) => payload,
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

export default combineReducers({
  totalBalance,
  reportYear,
  reportMonth,
  reportYears,
});
