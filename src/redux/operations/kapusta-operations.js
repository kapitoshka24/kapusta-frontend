import axios from 'axios';
import { kapustaActions } from '../actions';
import getYears from '../../helpers/getYears';

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

const calculateAvailableYears = () => async dispatch => {
  try {
    const { data: response } = await axios.get(
      '/currency-movements/total-months',
    );

    const currentYear = new Date().getFullYear();
    const firstYear = Object.keys(response.data.totalMonths).sort(
      (a, b) => a - b,
    )[0];

    const years = getYears(Number(firstYear), currentYear);
    dispatch(kapustaActions.changeReportYears(years));
  } catch (error) {
    console.log(error);
  }
};

const fetchSumCategory = () => async dispatch => {
  dispatch(kapustaActions.getSumCategoryRequest());

  try {
    const { data } = await axios.get(
      '/currency-movements/sum-category?date=01/2021',
    );

    dispatch(kapustaActions.getSumCategorySuccess(data.summary));
  } catch (error) {
    dispatch(kapustaActions.getSumCategoryError(error));
  }
};

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
  calculateAvailableYears,
  fetchSumCategory,
  fetchMonthlySummary,
};

export default operations;
