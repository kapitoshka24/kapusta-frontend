import axios from 'axios';
import authActions from '../actions/auth-actions';

axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api/users/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const authOperations = {
  register: values => async dispatch => {
    dispatch(authActions.registerPending());

    try {
      //   const { resp } = await axios.post('/registration');
      const resp = {
        name: values.name,
        email: values.email,
        status: 'success',
        message: '',
        token: '1',
      };

      if (resp.status === 'error') {
        throw resp.message;
      }

      dispatch(authActions.registerFulfilled(resp));
    } catch (error) {
      dispatch(authActions.registerRejected(error));
    }
  },

  login: values => async dispatch => {
    dispatch(authActions.loginPending());

    try {
      //   const { resp } = await axios.post('/login');

      const resp = {
        name: values.name ?? 'A',
        email: values.email,
        status: 'success',
        message: '',
        token: '1',
      };

      if (resp.status === 'error') {
        throw resp.message;
      }

      dispatch(authActions.loginFulfilled(resp));
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
};

export default authOperations;
