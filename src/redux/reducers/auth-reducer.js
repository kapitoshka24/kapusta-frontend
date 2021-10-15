import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../actions';

const initialUserState = { id: null, name: null, email: null, createdAt: null };

const user = createReducer(initialUserState, {
  [authActions.loginSuccess]: (_, { payload }) => ({
    id: payload.data.id,
    name: payload.data.name,
    email: payload.data.email,
  }),
  [authActions.registerSuccess]: (_, { payload }) => payload.data,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
  [authActions.refreshSessionError]: setError,
  [authActions.loginGoogleError]: setError,
});

const isLoggedIn = createReducer(false, {
  [authActions.refreshSessionSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
  [authActions.refreshSessionError]: () => false,
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
  error,
  // refreshToken,
  emailVerification,
});
