import axios from 'axios';
import { authActions } from '../actions';
import {
  loginSuccess,
  registerSuccess,
  authError,
} from '../../services/pnotify';

axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post('/users/registration', credentials);
    // token.set(data.token);
    dispatch(authActions.registerSuccess(data));
    registerSuccess(); //pnotify
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    authError(); //pnotify
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.data.token);
    dispatch(authActions.loginSuccess(data));
    loginSuccess();
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    authError();
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest);

  try {
    const { data } = await axios.get('users/current');

    dispatch(authActions.getCurrentUserSuccess(data.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const operations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
};

export default operations;
