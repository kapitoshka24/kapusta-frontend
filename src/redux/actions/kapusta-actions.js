import { createAction } from '@reduxjs/toolkit';

// const changeTotalBalance = createAction('kapusta/changeTotalBalance');

const totalBalanceRequest = createAction('kapusta/totalBalanceRequest');
const totalBalanceSuccess = createAction('kapusta/totalBalanceSuccess');
const totalBalanceError = createAction('kapusta/totalBalanceError');

const addTotalBalanceRequest = createAction('kapusta/addTotalBalanceRequest');
const addTotalBalanceSuccess = createAction('kapusta/addTotalBalanceSuccess');
const addTotalBalanceError = createAction('kapusta/addTotalBalanceError');

const getSumCategoryRequest = createAction('kapusta/sumCategoryRequest');
const getSumCategorySuccess = createAction('kapusta/sumCategorySuccess');
const getSumCategoryError = createAction('kapusta/sumCategoryError');

const actions = {
  //   changeTotalBalance,
  totalBalanceRequest,
  totalBalanceSuccess,
  totalBalanceError,
  addTotalBalanceRequest,
  addTotalBalanceSuccess,
  addTotalBalanceError,
  getSumCategoryRequest,
  getSumCategorySuccess,
  getSumCategoryError,
};
export default actions;
