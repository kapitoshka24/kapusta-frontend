import axios from 'axios';
import { authActions } from '../actions';
import {
  loginSuccess,
  loginError,
  registerError,
  serverError,
  logoutSuccess,
} from '../../services/pnotify';

axios.defaults.baseURL = 'https://kapusta-backend-app.herokuapp.com/api';

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
    accessToken.set(data.data.headers.accessToken);
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
    dispatch(authActions.loginError({ login: error.message }));
    loginError();
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/users/logout');
    dispatch(authActions.logoutSuccess());
    accessToken.unset();
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

  dispatch(authActions.getCurrentUserRequest());
  try {
    accessToken.set(persistedToken);
    const { data } = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
    refreshSession(dispatch, getState);
  }
};

const refreshSession = async (dispatch, getState) => {
  const {
    session: { refreshToken: refToken, sid: id },
  } = getState();

  const credentials = { sid: id };
  accessToken.set(refToken);

  dispatch(authActions.refreshSessionRequest());

  try {
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
    accessToken.set(data.accessToken);
    await dispatch(authActions.loginGoogleSuccess(data));
  } catch (error) {
    dispatch(authActions.loginGoogleError(error));
  }
};

const resendEmailVerification = email => async dispatch => {
  try {
    await axios.post('/users/verify', { email });

    dispatch(authActions.resendEmailVerification({ email }));
  } catch (error) {
    console.log(error);
  }
};

const clearErrors = () => dispatch => {
  dispatch(authActions.clearErrors());
};

const forgotten = email => async dispatch => {
  dispatch(authActions.forgottenPending());

  try {
    await axios.post('/users/forgotten', { email });

    dispatch(authActions.forgottenFulfilled({ email }));
  } catch (error) {
    if (error.response.data.code === 404) {
      dispatch(authActions.forgottenRejected({ email: 'Email ненайден' }));
    } else {
      registerError();
    }
  }
};

const resetPassword = (password, verifyToken) => async dispatch => {
  dispatch(authActions.resetPasswordPending());

  try {
    await axios.post('/users/resetPassword', {
      password,
      verifyToken,
    });

    dispatch(authActions.resetPasswordFulfilled(true));
  } catch (error) {
    if (error.response.data.code === 404) {
      dispatch(authActions.resetPasswordRejected({ email: 'Email ненайден' }));
    } else {
      registerError();
    }
  }
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
  forgotten,
  resetPassword,
};

export default operations;
