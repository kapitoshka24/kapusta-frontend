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

const fetchIncomeRequest = createAction('kapusta/fetchIncomeRequest');
const fetchIncomeSuccess = createAction('kapusta/fetchIncomeSuccess');
const fetchIncomeError = createAction('kapusta/fetchIncomeError');

const addIncomeRequest = createAction('kapusta/addIncomeRequest');
const addIncomeSuccess = createAction('kapusta/addIncomeSuccess');
const addIncomeError = createAction('kapusta/addIncomeError');

const deleteIncomeRequest = createAction('kapusta/deleteIncomeRequest');
const deleteIncomeSuccess = createAction('kapusta/deleteIncomeSuccess');
const deleteIncomeError = createAction('kapusta/deleteIncomeError');

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
  fetchIncomeRequest,
  fetchIncomeSuccess,
  fetchIncomeError,
  addIncomeRequest,
  addIncomeSuccess,
  addIncomeError,
  deleteIncomeRequest,
  deleteIncomeSuccess,
  deleteIncomeError,
};

export default actions;
