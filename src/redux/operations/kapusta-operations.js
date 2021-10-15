import axios from 'axios';
import { kapustaActions } from '../actions';

axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api';

const fetchTotalBalance = () => async dispatch => {
  dispatch(kapustaActions.totalBalanceRequest());
  try {
    const { data } = await axios.get('/currency-movements/balance');

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

  dispatch(kapustaActions.addTotalBalanceRequest());
  try {
    await axios.post('/currency-movements/create', balanceObj);
    dispatch(kapustaActions.addTotalBalanceSuccess(balance));
  } catch (error) {
    dispatch(kapustaActions.addTotalBalanceError(error));
  }
};

const fetchSumCategory = () => async dispatch => {
  dispatch(kapustaActions.getSumCategoryRequest);

  try {
    const { data } = await axios.get(
      '/currency-movements/sum-category?date=01/2021',
    );

    dispatch(kapustaActions.getSumCategorySuccess(data.summary));
  } catch (error) {
    dispatch(kapustaActions.getSumCategoryError(error));
    
const fetchMonthlySummary = () => async dispatch => {
  dispatch(kapustaActions.fetchMonthlySummaryRequest());

  try {
    const response = await axios.get(
      '/currency-movements/summary-expenses?year=2021',
    );
    dispatch(kapustaActions.fetchMonthlySummarySuccess(response.data.result));
  } catch (error) {
    dispatch(kapustaActions.fetchMonthlySummaryError(error));
  }
};

const operations = {
  fetchTotalBalance,
  addTotalBalance,
  fetchSumCategory,
  fetchMonthlySummary,
};

export default operations;
