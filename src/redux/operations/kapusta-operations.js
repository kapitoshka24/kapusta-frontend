import axios from 'axios';
import { kapustaActions } from '../actions';

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
    console.log(data);
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

const operations = {
  fetchExpense,
  addExpense,
  deleteExpense,
  fetchIncome,
  addIncome,
  deleteIncome,
};

export default operations;
