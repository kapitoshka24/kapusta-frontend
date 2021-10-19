import axios from 'axios';
import { kapustaActions } from '../actions';
import getYears from '../../helpers/getYears';
import { enterError } from '../../services/pnotify';
import { expenseOptions } from '../../helpers/expenseOptions';
import { incomeOptions } from '../../helpers/incomeOptions';

axios.defaults.baseURL = 'https://kapusta-backend-app.herokuapp.com/api';
const currentYear = new Date().getFullYear();

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
    enterError();
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
    enterError();
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

const fetchAdjustments = () => async dispatch => {
  dispatch(kapustaActions.fetchAdjustmentsRequest());

  try {
    const { data } = await axios.get('/currency-movements/adjustments');
    dispatch(kapustaActions.fetchAdjustmentsSuccess(data.data.adjustments));
  } catch (error) {
    dispatch(kapustaActions.fetchAdjustmentsError(error.message));
  }
};

const deleteAdjustments = id => async dispatch => {
  dispatch(kapustaActions.deleteAdjustmentsRequest());

  try {
    await axios.delete(`/currency-movements/${id}`);
    dispatch(kapustaActions.deleteAdjustmentsSuccess(id));
  } catch (error) {
    dispatch(kapustaActions.deleteAdjustmentsError);
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
    if (
      (data.summary || data.summary === 0) &&
      (data.totalIncome || data.totalIncome === 0) &&
      (data.totalExpenses || data.totalExpenses === 0)
    ) {
      dispatch(kapustaActions.getSumCategorySuccess(data));
    } else {
      dispatch(
        kapustaActions.getSumCategorySuccess({
          ...data,
          summary: 0,
          totalIncome: 0,
          totalExpenses: 0,
        }),
      );
    }
  } catch (error) {
    console.log(error.message);
    dispatch(kapustaActions.getSumCategoryError(error));
  }
};

const fetchMonthlySummary = () => async dispatch => {
  dispatch(kapustaActions.fetchMonthlySummaryRequest());

  try {
    const response = await axios.get(
      `/currency-movements/summary-expenses?year=${currentYear}`,
    );
    dispatch(kapustaActions.fetchMonthlySummarySuccess(response.data.result));
  } catch (error) {
    dispatch(kapustaActions.fetchMonthlySummaryError(error));
  }
};

const fetchMonthlySummaryIncome = () => async dispatch => {
  dispatch(kapustaActions.fetchMonthlySummaryIncomeRequest());

  try {
    const response = await axios.get(
      `/currency-movements/summary-income?year=${currentYear}`,
    );
    dispatch(
      kapustaActions.fetchMonthlySummaryIncomeSuccess(response.data.result),
    );
  } catch (error) {
    dispatch(kapustaActions.fetchMonthlySummaryIncomeError(error));
  }
};

const fetchCategoryesChartData = (month, year) => async dispatch => {
  dispatch(kapustaActions.fetchExpensesChartDataRequest());
  dispatch(kapustaActions.fetchIncomeChartDataRequest());

  const correctMonth = month < 10 ? '0'.concat(month) : month;

  try {
    const { data } = await axios.get(
      `/currency-movements/sum-category?date=${correctMonth}/${year}`,
    );

    const expenses = data?.summary?.expenses
      .map(data => ({
        _id: expenseOptions[data._id],
        sum: data.total,
      }))
      .sort((a, b) => (a.sum < b.sum ? 1 : -1));

    const income = data?.summary?.income
      .map(data => ({
        _id: incomeOptions[data._id],
        sum: data.total,
      }))
      .sort((a, b) => (a.sum < b.sum ? 1 : -1));

    dispatch(
      kapustaActions.fetchExpensesChartDataSuccess(expenses ? expenses : []),
    );
    dispatch(kapustaActions.fetchIncomeChartDataSuccess(income ? income : []));
  } catch (error) {
    dispatch(kapustaActions.fetchExpensesChartDataError(error));
    dispatch(kapustaActions.fetchIncomeChartDataError(error));
  }
};

const fetchCategoryExpensesDetails =
  (month, year, category) => async dispatch => {
    dispatch(kapustaActions.fetchExpensesChartDataRequest());

    const correctMonth = month < 10 ? '0'.concat(month) : month;

    try {
      const { data } = await axios.get(
        `/currency-movements/detailed-categories?date=${correctMonth}/${year}&category=${category}`,
      );
      const sortedData = data.response.sort((a, b) => (a.sum < b.sum ? 1 : -1));
      dispatch(kapustaActions.fetchExpensesChartDataSuccess(sortedData));
    } catch (error) {
      dispatch(kapustaActions.fetchExpensesChartDataError(error));
    }
  };

const fetchCategoryIncomeDetails =
  (month, year, category) => async dispatch => {
    dispatch(kapustaActions.fetchIncomeChartDataRequest());

    const correctMonth = month < 10 ? '0'.concat(month) : month;

    try {
      const { data } = await axios.get(
        `/currency-movements/detailed-categories?date=${correctMonth}/${year}&category=${category}`,
      );
      const sortedData = data.response.sort((a, b) => (a.sum < b.sum ? 1 : -1));
      dispatch(kapustaActions.fetchIncomeChartDataSuccess(sortedData));
    } catch (error) {
      dispatch(kapustaActions.fetchIncomeChartDataError(error));
    }
  };

const operations = {
  fetchExpense,
  addExpense,
  deleteExpense,
  fetchIncome,
  addIncome,
  deleteIncome,
  fetchAdjustments,
  deleteAdjustments,
  fetchTotalBalance,
  addTotalBalance,
  calculateAvailableYears,
  fetchSumCategory,
  fetchMonthlySummary,
  fetchMonthlySummaryIncome,
  fetchCategoryesChartData,
  fetchCategoryExpensesDetails,
  fetchCategoryIncomeDetails,
};

export default operations;
