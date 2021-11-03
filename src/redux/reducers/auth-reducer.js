import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../actions';

const initialUserState = { id: null, name: null, email: null, createdAt: null };

const user = createReducer(initialUserState, {
  [authActions.loginSuccess]: (_, { payload }) => ({
    id: payload.data.id,
    name: payload.data.name,
    picture: payload.data.picture,
    email: payload.data.email,
  }),
  [authActions.registerGoogleSuccess]: (_, { payload }) => ({
    id: payload.data.id,
    name: payload.data.name,
    picture: payload.data.picture,
    email: payload.data.email,
    createdAt: payload.data.createdAt,
  }),
  [authActions.loginGoogleSuccess]: (_, { payload }) => ({
    id: payload.data.id,
    name: payload.data.name,
    picture: payload.data.picture,
    email: payload.data.email,
    createdAt: payload.data.createdAt,
  }),
  [authActions.registerSuccess]: (_, { payload }) => payload.data,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => ({
    id: payload.data.id,
    picture: payload.data.picture,
    name: payload.data.name,
    email: payload.data.email,
  }),
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
  [authActions.refreshSessionError]: setError,
  [authActions.loginGoogleError]: setError,
  [authActions.registerGoogleError]: setError,
  [authActions.clearErrors]: () => null,
  [authActions.forgottenRejected]: setError,
  [authActions.resetPasswordRejected]: setError,
  [authActions.loginSuccess]: () => null,
});

const isLoggedIn = createReducer(false, {
  [authActions.refreshSessionSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.loginGoogleSuccess]: () => true,
  [authActions.registerGoogleSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
  [authActions.refreshSessionError]: () => false,
});

const isFetching = createReducer(false, {
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

const initialEmailVerificationState = {
  email: null,
  onVerification: false,
  verificationStart: null,
};

const emailVerification = createReducer(initialEmailVerificationState, {
  [authActions.loginSuccess]: () => initialEmailVerificationState,
  [authActions.registerSuccess]: (_, { payload }) => ({
    email: payload.data.email,
    onVerification: true,
    verificationStart: Date.parse(new Date()),
  }),
  [authActions.resendEmailVerification]: (_, { payload }) => ({
    email: payload.email,
    onVerification: true,
    verificationStart: Date.parse(new Date()),
  }),
  [authActions.registerError]: () => initialEmailVerificationState,
});

const initialForgottenState = {
  email: null,
  onReset: false,
  resetStart: null,
};

const forgotten = createReducer(initialForgottenState, {
  [authActions.forgottenPending]: () => {},
  [authActions.forgottenFulfilled]: (_, { payload }) => ({
    email: payload.email,
    onReset: true,
    resetStart: Date.parse(new Date()),
  }),
  [authActions.forgottenRejected]: (_, { payload }) => initialForgottenState,
});

const initialResetPasswordState = {
  success: false,
};
const resetPassword = createReducer(initialResetPasswordState, {
  [authActions.resetPasswordFulfilled]: (_, { payload }) => ({
    success: payload,
  }),
  [authActions.resetPasswordRejected]: (_, { payload }) =>
    initialResetPasswordState,
  [authActions.loginGoogleSuccess]: () => initialResetPasswordState,
  [authActions.forgottenFulfilled]: () => initialResetPasswordState,
});

export default combineReducers({
  user,
  isLoggedIn,
  isFetching,
  error,
  emailVerification,
  forgotten,
  resetPassword,
});
