import axios from 'axios';
import { kapustaActions } from '../actions';

axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api';

const addExpense = expense => dispatch => {
  dispatch(kapustaActions.addExpenseRequest());

  try {
  } catch (error) {}

  axios
    .post('/currency-movements/create', expense)
    .then(({ data }) => dispatch(kapustaActions.addExpenseSuccess(data)))
    .catch(error => dispatch(kapustaActions.addExpenseError(error.message)));
};

const operations = {
  addExpense,
};

export default operations;
