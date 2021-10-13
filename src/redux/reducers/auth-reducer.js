import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../actions';

const initialUserState = { email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.data,
  [authActions.loginSuccess]: (_, { payload }) => {
    return {
      email: payload.data.email,
      name: payload.data.name,
      id: payload.data.id,
    };
  },
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const accessToken = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) =>
    payload.data.headers.accessToken,
  [authActions.logoutSuccess]: () => null,
});
const refreshToken = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) =>
    payload.data.headers.refreshToken,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isLoggedIn = createReducer(false, {
  // [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

const initialEmailVerificationState = {
  onVerification: false,
  verificationStart: null,
};
const emailVerification = createReducer(initialEmailVerificationState, {
  [authActions.loginSuccess]: () => initialEmailVerificationState,
  [authActions.registerSuccess]: () => ({
    onVerification: true,
    verificationStart: new Date().toLocaleString(),
  }),
  [authActions.resendEmailVerification]: () => ({
    onVerification: true,
    verificationStart: new Date().toLocaleString(),
  }),
  [authActions.registerError]: () => initialEmailVerificationState,
});

export default combineReducers({
  user,
  isLoggedIn,
  accessToken,
  error,
  refreshToken,
  emailVerification,
});
