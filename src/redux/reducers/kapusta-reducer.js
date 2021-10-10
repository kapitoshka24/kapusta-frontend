import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { kapustaActions } from '../actions';

const totalBalance = createReducer(0, {
  [kapustaActions.changeTotalBalance]: (_, { payload }) => payload,
});

export default combineReducers({
  totalBalance,
});
