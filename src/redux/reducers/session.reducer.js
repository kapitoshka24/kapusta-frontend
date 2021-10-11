import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../actions';

const session = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.data.headers,
  [authActions.logoutSuccess]: () => null,
});
export default session;
