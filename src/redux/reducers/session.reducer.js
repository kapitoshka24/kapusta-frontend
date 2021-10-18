import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../actions';

const session = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.data.headers,
  [authActions.refreshSessionSuccess]: (_, { payload }) => payload.data.headers,
  [authActions.registerGoogleSuccess]: (_, { payload }) => payload.data.headers,
  [authActions.loginGoogleSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => null,
});
export default session;
