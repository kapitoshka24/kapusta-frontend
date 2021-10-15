import axios from 'axios';
import { kapustaActions } from '../actions';

axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api';

const fetchExpense = () => async dispatch => {
  dispatch(kapustaActions.fetchExpenseRequest());

  try {
    const { data } = await axios.get('/currency-movements');
    dispatch(kapustaActions.fetchExpenseSuccess(data.data.allLines));
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

const operations = {
  addExpense,
  fetchExpense,
  deleteExpense,
};

export default operations;
