import { createAction } from '@reduxjs/toolkit';

const authActions = {
  registerPending: createAction('user/registerPending'),
  registerFulfilled: createAction('user/registerFulfilled'),
  registerRejected: createAction('user/registerRejected'),

  loginPending: createAction('user/loginPending'),
  loginFulfilled: createAction('user/loginFulfilled'),
  loginRejected: createAction('user/loginRejected'),

  logoutPending: createAction('user/logoutPending'),
  logoutFulfilled: createAction('user/logoutFulfilled'),
  logoutRejected: createAction('user/logoutRejected'),

  onVerification: createAction('user/onVerification'),
};

export default authActions;
