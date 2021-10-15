import { createAction } from '@reduxjs/toolkit';

const changeTotalBalance = createAction('ckapusta/changeTotalBalance');

const fetchExpenseRequest = createAction('kapusta/fetchExpenseRequest');
const fetchExpenseSuccess = createAction('kapusta/fetchExpenseSuccess');
const fetchExpenseError = createAction('kapusta/fetchExpenseError');

const addExpenseRequest = createAction('kapusta/addExpenseRequest');
const addExpenseSuccess = createAction('kapusta/addExpenseSuccess');
const addExpenseError = createAction('kapusta/addExpenseError');

const deleteExpenseRequest = createAction('kapusta/deleteExpenseRequest');
const deleteExpenseSuccess = createAction('kapusta/deleteExpenseSuccess');
const deleteExpenseError = createAction('kapusta/deleteExpenseError');

const actions = {
  changeTotalBalance,
  fetchExpenseRequest,
  fetchExpenseSuccess,
  fetchExpenseError,
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseError,
  deleteExpenseRequest,
  deleteExpenseSuccess,
  deleteExpenseError,
};

export default actions;
