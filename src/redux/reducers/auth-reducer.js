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
};

const user = createReducer(initialUserState, {
  [authActions.registerPending]: state => {
    state.isLoading = true;
  },
  [authActions.registerFulfilled]: (state, { payload }) => ({
    isLoading: false,
    isLogged: true,
    name: payload.name,
    email: payload.email,
    error: null,
    token: payload.token,
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
});

export default combineReducers({
  user,
});
