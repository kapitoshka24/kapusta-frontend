import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialUserState = { email: null };

const user = createReducer(initialUserState, {});

export default combineReducers({
  user,
});
