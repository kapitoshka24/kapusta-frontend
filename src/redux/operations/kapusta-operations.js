import axios from 'axios';
import { kapustaActions } from '../actions';

axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api';

const fetchTotalBalance = () => async dispatch => {
  dispatch(kapustaActions.totalBalanceRequest);
  try {
    const { data } = await axios.get('/currencymovements/balance');

    dispatch(kapustaActions.totalBalanceSuccess(data));
  } catch (error) {
    dispatch(kapustaActions.totalBalanceError(error));
  }
};

const addTotalBalance = balance => async dispatch => {
  const balanceObj = {
    date: Date.now(),
    name: 'adjustment',
    category: 'adjustments',
    sum: balance,
  };

  dispatch(kapustaActions.addTotalBalanceRequest);
  try {
    await axios.post('/currencymovements/create', balanceObj);
    dispatch(kapustaActions.addTotalBalanceSuccess(balance));
  } catch (error) {
    dispatch(kapustaActions.addTotalBalanceError(error));
  }
};

const operations = {
  fetchTotalBalance,
  addTotalBalance,
};

export default operations;
