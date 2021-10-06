import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { changeTotalBalance } from '../actions';

const totalBalance = createReducer(0, {
  [changeTotalBalance]: (_, { payload }) => payload,
});

export default combineReducers({
  totalBalance,
});
