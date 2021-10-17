import axios from 'axios';
import { kapustaActions } from '../actions';
import getYears from '../../helpers/getYears';

axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api';

const fetchExpense = () => async dispatch => {
  dispatch(kapustaActions.fetchExpenseRequest());

  try {
    const { data } = await axios.get('/currency-movements/expends');
    dispatch(kapustaActions.fetchExpenseSuccess(data.data.expends));
  } catch (error) {
    dispatch(kapustaActions.fetchExpenseError(error.message));
  }
};

const addExpense = expense => async dispatch => {
  dispatch(kapustaActions.addExpenseRequest());

  try {
    const { data } = await axios.post('/currency-movements/create', expense);
    dispatch(kapustaActions.addExpenseSuccess(data.data.createdLine));
  } catch (error) {
    dispatch(kapustaActions.addExpenseError(error.message));
  }
};

const deleteExpense = id => async dispatch => {
  dispatch(kapustaActions.deleteExpenseRequest());

  try {
    await axios.delete(`/currency-movements/${id}`);
    dispatch(kapustaActions.deleteExpenseSuccess(id));
  } catch (error) {
    dispatch(kapustaActions.deleteExpenseError);
  }
};

const fetchIncome = () => async dispatch => {
  dispatch(kapustaActions.fetchIncomeRequest());

  try {
    const { data } = await axios.get('/currency-movements/incomes');
    dispatch(kapustaActions.fetchIncomeSuccess(data.data.incomes));
  } catch (error) {
    dispatch(kapustaActions.fetchIncomeError(error.message));
  }
};

const addIncome = income => async dispatch => {
  dispatch(kapustaActions.addIncomeRequest());

  try {
    const { data } = await axios.post('/currency-movements/create', income);
    dispatch(kapustaActions.addIncomeSuccess(data.data.createdLine));
  } catch (error) {
    dispatch(kapustaActions.addIncomeError(error.message));
  }
};

const deleteIncome = id => async dispatch => {
  dispatch(kapustaActions.deleteIncomeRequest());

  try {
    await axios.delete(`/currency-movements/${id}`);
    dispatch(kapustaActions.deleteIncomeSuccess(id));
  } catch (error) {
    dispatch(kapustaActions.deleteIncomeError);
  }
};

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

const fetchSumCategory = (month, year) => async dispatch => {
  dispatch(kapustaActions.getSumCategoryRequest());
  const correctMonth = month < 10 ? '0'.concat(month) : month;

  try {
    const { data } = await axios.get(
      `/currency-movements/sum-category?date=${correctMonth}/${year}`,
    );

    dispatch(kapustaActions.getSumCategorySuccess(data));
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

const fetchCategoryDetails = (month, year, category) => async dispatch => {
  const correctMonth = month < 10 ? '0'.concat(month) : month;

  try {
    const { data } = await axios.get(
      `/currency-movements/detailed-categories?date=${correctMonth}/${year}&category=${category}`,
    );
    const sortedData = data.response.sort((a, b) => (a.sum < b.sum ? 1 : -1));
    dispatch(kapustaActions.fetchCategoryDetails(sortedData));
  } catch (error) {
    console.log(error);
  }
};

const operations = {
  fetchExpense,
  addExpense,
  deleteExpense,
  fetchIncome,
  addIncome,
  deleteIncome,
  fetchTotalBalance,
  addTotalBalance,
  calculateAvailableYears,
  fetchSumCategory,
  fetchMonthlySummary,
  fetchCategoryDetails,
};

export default operations;
