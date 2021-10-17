import axios from 'axios';
import { authActions } from '../actions';
import {
  loginSuccess,
  loginError,
  // registerSuccess,
  registerError,
  serverError,
  logoutSuccess,
} from '../../services/pnotify';

axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api/';

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
  } catch (error) {
    if (error.response.data.code === 409) {
      dispatch(
        authActions.registerError({ email: 'Email уже зарегистрирован' }),
      );
    } else {
      registerError();
    }
  }
};

const registerWithGoogle = credentials => async dispatch => {
  dispatch(authActions.registerGoogleRequest());
  try {
    const { data } = await axios.post('/users/google/v1', credentials);

    await dispatch(authActions.registerGoogleSuccess(data));
  } catch (error) {
    if (error.response.data.code === 409) {
      dispatch(
        authActions.registerGoogleError({ email: 'Email уже зарегистрирован' }),
      );
    } else {
      registerError();
    }
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
  // const {
  //   session: { accessToken: persistedToken },
  // } = getState();

  // if (!persistedToken) {
  //   return;
  // }

  // accessToken.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  try {
    const {
      session: { accessToken: persistedToken },
    } = getState();

    if (!persistedToken) {
      return;
    }

    accessToken.set(persistedToken);

    const { data } = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
    refreshSession(dispatch, getState);
  }
};

const refreshSession = async (dispatch, getState) => {
  dispatch(authActions.refreshSessionRequest());

  // const {
  //   session: { refreshToken: refToken, sid: id },
  // } = getState();

  // const credentials = { sid: id };
  // accessToken.set(refToken);

  try {
    const {
      session: { refreshToken: refToken, sid: id },
    } = getState();

    const credentials = { sid: id };
    accessToken.set(refToken);

    const data = await axios.post('/users/refresh', credentials);
    dispatch(authActions.refreshSessionSuccess(data));
    loginSuccess();
    accessToken.unset();
  } catch (error) {
    dispatch(authActions.refreshSessionError(error.message));
    loginError();
  }
};

const loginWithGoogle = data => async dispatch => {
  dispatch(authActions.loginGoogleRequest());
  try {
    await dispatch(authActions.loginGoogleSuccess(data));
  } catch (e) {
    dispatch(authActions.loginGoogleError(e));
  }
};

const resendEmailVerification = email => async dispatch => {
  try {
    await axios.post('users/verify', { email });

    dispatch(authActions.resendEmailVerification({ email }));
  } catch (error) {
    console.log(error);
  }
};

const clearErrors = () => dispatch => {
  dispatch(authActions.clearErrors());
};

const operations = {
  register,
  registerWithGoogle,
  logIn,
  loginWithGoogle,
  logOut,
  getCurrentUser,
  refreshSession,
  resendEmailVerification,
  clearErrors,
};

export default operations;
