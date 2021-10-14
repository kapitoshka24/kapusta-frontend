import { createAction } from '@reduxjs/toolkit';

const changeTotalBalance = createAction('ckapusta/changeTotalBalance');

const addExpenseRequest = createAction('kapusta/addExpenseRequest');
const addExpenseSuccess = createAction('kapusta/addExpenseSuccess');
const addExpenseError = createAction('kapusta/addExpenseError');

const actions = {
  changeTotalBalance,
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseError,
};

export default actions;
