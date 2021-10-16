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

export default combineReducers({
  totalBalance,
  expense,
  income,
});
