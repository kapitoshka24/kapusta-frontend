import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { kapustaActions } from '../actions';

const totalBalance = createReducer('', {
  [kapustaActions.totalBalanceSuccess]: (_, { payload }) =>
    payload.data.balance,
  [kapustaActions.addTotalBalanceSuccess]: (_, { payload }) => payload,
});

const reportSummary = createReducer(
  {},
  {
    [kapustaActions.getSumCategorySuccess]: (_, { payload }) => payload,
  },
);

export default combineReducers({
  totalBalance,
  reportSummary,
});
