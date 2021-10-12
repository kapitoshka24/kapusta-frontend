import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { kapustaActions } from '../actions';

const totalBalance = createReducer(0, {
  [kapustaActions.changeTotalBalance]: (_, { payload }) => payload,
});

const monthlySummary = createReducer([], {
  [kapustaActions.fetchMonthlySummarySuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [kapustaActions.fetchMonthlySummaryError]: (_, { payload }) =>
    console.log(payload),
});

export default combineReducers({
  totalBalance,
  monthlySummary,
  error,
});
