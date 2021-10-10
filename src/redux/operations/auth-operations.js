import axios from 'axios';
import authActions from '../actions/auth-actions';

axios.defaults.baseURL = 'http://localhost:3030/api/users/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const authOperations = {
  register: values => async dispatch => {
    dispatch(authActions.registerPending());

    delete values.confirm;

    try {
      const { data } = await axios.post('/registration', values);

      if (data.status === 'error') {
        throw data.message;
      }

      dispatch(authActions.registerFulfilled());
    } catch (error) {
      dispatch(authActions.registerRejected(error));
    }
  },

  login: values => async dispatch => {
    dispatch(authActions.loginPending());

    try {
      const { data } = await axios.post('/login', values);

      if (data.status === 'error') {
        throw data.message;
      }

      const user = await axios.get('/current', {
        headers: {
          Authorization: 'Bearer ' + data.data.token,
        },
      });

      dispatch(
        authActions.loginFulfilled({
          ...user.data.data,
          token: data.data.token,
        }),
      );
    } catch (error) {
      dispatch(authActions.loginRejected(error));
    }
  },

  logout: values => async dispatch => {
    dispatch(authActions.logoutPending());

    try {
      const { resp } = await axios.post('/logout');

      dispatch(authActions.logoutFulfilled(resp));
    } catch (error) {
      dispatch(authActions.logoutRejected(error));
    }
  },

  onVerification: is => async dispatch => {
    dispatch(authActions.onVerification(is));
  },

  clearError: () => async dispatch => {
    dispatch(authActions.clearError());
  },
};

export default authOperations;
