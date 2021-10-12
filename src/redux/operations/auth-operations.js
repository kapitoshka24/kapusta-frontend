import axios from 'axios';
import { authActions } from '../actions';
import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  serverError,
  logoutSuccess,
} from '../../services/pnotify';
import { useParams } from 'react-router-dom';

axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api';

const accessToken = {
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
    dispatch(authActions.registerSuccess(data));
    registerSuccess(data.data.email); //pnotify
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    registerError(); //pnotify
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);
    accessToken.set(data.data.headers.accessToken);
    dispatch(authActions.loginSuccess(data));
    loginSuccess();
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    loginError();
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/users/logout');
    accessToken.unset();
    dispatch(authActions.logoutSuccess());
    logoutSuccess();
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
    serverError();
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    session: { accessToken: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  accessToken.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const { data } = await axios.get('users/current');

    dispatch(authActions.getCurrentUserSuccess(data.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
    loginError();
  }
};

const refreshSession = () => async (dispatch, getState) => {
  const {
    session: { refreshToken: refToken, sid: id },
  } = getState();
  dispatch(authActions.refreshSessionRequest());
  try {
    accessToken.set(refToken);
    const { data } = await axios.post('/users/refresh', { sid: id });
    dispatch(authActions.refreshSessionSuccess(data));
    loginSuccess();
    accessToken.unset();
  } catch (error) {
    dispatch(authActions.refreshSessionError(error.message));
    loginError();
  }
};

const loginWithGoogle = () => async dispatch => {
  dispatch(authActions.loginGoogleRequest());
  accessToken.unset();
  try {
    await axios.get('users/google');
    const data = useParams();
    dispatch(authActions.loginGoogleSuccess(data));
  } catch (error) {
    dispatch(authActions.loginGoogleError(error.message));
  }
};

const operations = {
  register,
  logIn,
  loginWithGoogle,
  logOut,
  getCurrentUser,
  refreshSession,
};

export default operations;
