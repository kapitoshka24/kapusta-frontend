import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { kapustaActions } from '../actions';

const totalBalance = createReducer(0, {
  [kapustaActions.changeTotalBalance]: (_, { payload }) => payload,
});

const expense = createReducer([], {
  [kapustaActions.fetchExpenseSuccess]: (_, { payload }) => payload,
  [kapustaActions.addExpenseSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [kapustaActions.deleteExpenseSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({
  totalBalance,
  expense,
});
