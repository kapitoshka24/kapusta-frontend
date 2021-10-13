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

export default combineReducers({
  loading,
  totalBalance,
});
