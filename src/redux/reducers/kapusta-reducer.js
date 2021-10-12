import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  changeTotalBalance,
  // fetchMonthlySummaryRequest,
  fetchMonthlySummarySuccess,
  fetchMonthlySummaryError,
} from '../actions';

const totalBalance = createReducer(0, {
  [changeTotalBalance]: (_, { payload }) => payload,
});

const monthlySummary = createReducer([], {
  [fetchMonthlySummarySuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchMonthlySummaryError]: (_, { payload }) => console.log(payload),
});

export default combineReducers({
  totalBalance,
  monthlySummary,
  error,
});
