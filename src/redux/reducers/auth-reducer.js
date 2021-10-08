import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from '../actions/auth-actions';

const initialUserState = {
  isLoading: false,
  isLogged: false,
  name: '',
  email: '',
  error: null,
  token: null,
  onVerification: false,
};

const user = createReducer(initialUserState, {
  [authActions.registerPending]: state => {
    state.isLoading = true;
  },
  [authActions.registerFulfilled]: state => ({
    ...state,
    isLoading: false,
    error: null,
  }),
  [authActions.registerRejected]: (_, { payload }) => ({
    ...initialUserState,
    error: payload,
  }),

  [authActions.loginPending]: state => {
    state.isLoading = true;
  },
  [authActions.loginFulfilled]: (_, { payload }) => ({
    isLoading: false,
    isLogged: true,
    name: payload.name,
    email: payload.email,
    error: null,
    token: payload.token,
    onVerification: false,
  }),
  [authActions.loginRejected]: (_, { payload }) => ({
    ...initialUserState,
    error: payload,
  }),

  [authActions.logoutPending]: state => {
    state.isLoading = true;
  },
  [authActions.logoutFulfilled]: () => initialUserState,
  [authActions.logoutRejected]: state => state, // !!! what we should do when logout rejected ?

  [authActions.onVerification]: (state, { payload }) => ({
    ...state,
    onVerification: payload,
  }),
});

export default combineReducers({
  user,
});
