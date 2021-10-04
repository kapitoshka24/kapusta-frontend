import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const totalBalance = createReducer(0, {});

export default combineReducers({
  totalBalance,
});
