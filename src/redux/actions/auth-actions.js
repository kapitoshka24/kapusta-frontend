import { createAction } from '@reduxjs/toolkit';

const actions = {
  registerRequest: createAction('auth/registerRequest'),
  registerSuccess: createAction('auth/registerSuccess'),
  registerError: createAction('auth/registerError'),

  registerGoogleRequest: createAction('auth/registerGoogleRequest'),
  registerGoogleSuccess: createAction('auth/registerGoogleSuccess'),
  registerGoogleError: createAction('auth/registerGoogleError'),

  loginRequest: createAction('auth/loginRequest'),
  loginSuccess: createAction('auth/loginSuccess'),
  loginError: createAction('auth/loginError'),

  loginGoogleRequest: createAction('auth/loginGoogleRequest'),
  loginGoogleSuccess: createAction('auth/loginGoogleSuccess'),
  loginGoogleError: createAction('auth/loginGoogleError'),

  logoutRequest: createAction('auth/logoutRequest'),
  logoutSuccess: createAction('auth/logoutSuccess'),
  logoutError: createAction('auth/logoutError'),

  refreshSessionRequest: createAction('auth/refreshSessionRequest'),
  refreshSessionSuccess: createAction('auth/refreshSessionSuccess'),
  refreshSessionError: createAction('auth/refreshSessionError'),

  getCurrentUserRequest: createAction('auth/getCurrentUserRequest'),
  getCurrentUserSuccess: createAction('auth/getCurrentUserSuccess'),
  getCurrentUserError: createAction('auth/getCurrentUserError'),

  resendEmailVerification: createAction('auth/resendEmailVerification'),

  clearErrors: createAction('auth/clearErrors'),

  forgottenPending: createAction('auth/forgottenPending'),
  forgottenFulfilled: createAction('auth/forgottenFulfilled'),
  forgottenRejected: createAction('auth/forgottenRejected'),

  resetPasswordPending: createAction('auth/resetPasswordPending'),
  resetPasswordFulfilled: createAction('auth/resetPasswordFulfilled'),
  resetPasswordRejected: createAction('auth/resetPasswordRejected'),
};

export default actions;
