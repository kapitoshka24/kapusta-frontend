import { createAction } from '@reduxjs/toolkit';

// const changeTotalBalance = createAction('ckapusta/changeTotalBalance');

const totalBalanceRequest = createAction('ckapusta/totalBalanceRequest');
const totalBalanceSuccess = createAction('ckapusta/totalBalanceSuccess');
const totalBalanceError = createAction('ckapusta/totalBalanceError');

const addTotalBalanceRequest = createAction('ckapusta/addTotalBalanceRequest');
const addTotalBalanceSuccess = createAction('ckapusta/addTotalBalanceSuccess');
const addTotalBalanceError = createAction('ckapusta/addTotalBalanceError');

const actions = {
  //   changeTotalBalance,
  totalBalanceRequest,
  totalBalanceSuccess,
  totalBalanceError,
  addTotalBalanceRequest,
  addTotalBalanceSuccess,
  addTotalBalanceError,
};
export default actions;
